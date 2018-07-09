{% latex
  roi;
  Figure 6.;
  Extracting ROIs (regions of interest) from a camera image. Each ROI is then normalized (Figure 5).
%}
\documentclass[tikz, border=0pt]{standalone}
\usetikzlibrary{shapes,arrows, calc}

\newdimen\XCoord
\newdimen\YCoord
\newcommand*{\ExtractCoordinate}[1]{\path (#1); \pgfgetlastxy{\XCoord}{\YCoord};}


\begin{document}
\centering
\begin{tikzpicture}[node distance = 3.5cm, auto]
    % Place nodes
    \node [inner sep=0pt, label=below:input] (1) {\includegraphics[width=85px]
      {assets/images/digits/7-01-in.png}};

    \node [inner sep=0pt, right of=1, label=below:grayscale] (2) {\includegraphics[width=85px]
      {assets/images/digits/7-02-gray.png}};

    \node [inner sep=0pt, right of=2, label=below:blur] (3) {\includegraphics[width=85px]
      {assets/images/digits/7-03-blur.png}};

    \node [inner sep=0pt, right of=3, label=below:contrast] (4) {\includegraphics[width=85px]
      {assets/images/digits/7-04-contrast.png}};

    \node [inner sep=0pt, right of=4, label=below:binary inverse] (5) {\includegraphics[width=85px]
      {assets/images/digits/7-05-binary.png}};

    \ExtractCoordinate{5}

    \node [inner sep=0pt, label=below:edges] (6) at (\XCoord, \YCoord - 130pt) {\includegraphics[width=85px]
      {assets/images/digits/7-06-canny.png}};

    \node [inner sep=0pt, rectangle, draw, fill=white, thick, rounded corners, right of=6, minimum size=45pt, text centered]
    (7) {};

    \ExtractCoordinate{7}

    \node [inner sep=0pt, rectangle, draw, fill=white, thick, rounded corners, minimum size=45pt, text centered]
    (7a) at (\XCoord + 5pt, \YCoord - 5pt) {};

    \node [inner sep=0pt, rectangle, draw, fill=white, thick, rounded corners, minimum size=45pt, text centered]
    (7b) at (\XCoord + 10pt, \YCoord - 10pt) {contours};

    \node [inner sep=0pt, label=above:ROI] (8) at (\XCoord + 10pt, \YCoord + 130pt) {\includegraphics[width=20px]
      {assets/images/digits/7-07-10-roi.png}};

      \node [inner sep=0pt, right of=8] (9) {NORMALIZATION};

    % Draw edges
    \path [draw, thick, -latex'] (1) -- (2);
    \path [draw, thick, -latex'] (2) -- (3);
    \path [draw, thick, -latex'] (3) -- (4);
    \path [draw, thick,  -latex'] (4) -- (5);
    \path [draw, thick,  -latex'] (5) -- (6);
    \path [draw, thick,  -latex'] (6) -- (7);
    \path [draw, thick,  -latex'] (7b) -- (8);
    \path [draw, thick,  -latex'] (5) -- (8);
    \path [draw, thick,  -latex', dotted] (8) -- (9);
\end{tikzpicture}

\end{document}
{% endlatex %}
