# By Federico Saldarin.
# Based on http://github.com/Maxfan-zone http://maxfan.org

module Jekyll
  module Tags
    class Latex < Liquid::Block
      def initialize(tag_name, markup, tokens)
        super

        # FEDE_CHANGE
        args = markup.split(",")
        @file_name = args[0].gsub(/\s+/, "")
        @description = args.length > 1 ? args[1].gsub(/,/ , "").gsub(/"/, "") : nil

        @header = <<-'END'
        END

        @footer = <<-'END'
        END

      end

      def render(context)
        tikz_code = @header + super + @footer

        tmp_directory = File.join(Dir.pwd, "_latex_tmp", File.basename(context["page"]["url"], ".*"))
        tex_path = File.join(tmp_directory, "#{@file_name}.tex")
        pdf_path = File.join(tmp_directory, "#{@file_name}.pdf")
        FileUtils.mkdir_p tmp_directory

        dest_directory = File.join(Dir.pwd, "assets/images", File.basename(context["page"]["url"], ".*"))
        dest_path = File.join(dest_directory, "#{@file_name}.svg")
        FileUtils.mkdir_p dest_directory

        # if the file doesn't exist or the tikz code is not the same with the file, then compile the file
        if !File.exist?(tex_path) or !tikz_same?(tex_path, tikz_code) or !File.exist?(dest_path)
          File.open(tex_path, 'w') { |file| file.write("#{tikz_code}") }
          system("pdflatex -output-directory #{tmp_directory} #{tex_path}")
          system("pdf2svg #{pdf_path} #{dest_path}")
        end

        web_dest_path = File.join("/assets/images", File.basename(context["page"]["url"], ".*"), "#{@file_name}.svg")
        # FEDE_CHANGE

        # original:
        # "<embed class=\"tikz\" src=\"#{web_dest_path}\" type=\"image/svg+xml\" />"

        # version pre table (does not scale / respond):
        # "<figure>
        #     <span class=\"image fit\">
        #       <embed class=\"latex\" src=\"#{web_dest_path}\" type=\"image/svg+xml\" />
        #       <figcaption>#{@description}</figcaption>
        #     </span>
        # </figure>"

        # responsive table version:
        "<table >
          <tr>
            <td>
            <figure>
                <img src=\"#{web_dest_path}\" alt=\"\">
                <figcaption>#{@description}</figcaption>
            </figure>
            </td>
          </tr>
        </table>"


      end

      private

      def tikz_same?(file, code)
        File.open(file, 'r') do |file|
          file.read == code
        end
      end

    end
  end
end

Liquid::Template.register_tag('latex', Jekyll::Tags::Latex)
