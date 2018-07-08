{% latex
  ios;
  Figure 8.;
  Diagram of iOS app combining ROI extraction + normalization and the trained model.
%}
\documentclass[tikz, border=0pt]{standalone}
\usetikzlibrary{shapes, arrows, calc}

\begin{document}
\centering
\begin{tikzpicture}[node distance = 3.5cm, auto]
\node [inner sep=0pt, label=below:camera in] (0) {\includegraphics[width=85px]
  {assets/images/digits/iosin.png}};

  \node [inner sep=5pt, right of=0, rectangle, draw, thick, rounded corners, minimum size=45pt, text centered, align=center]
  (1) {crop\\to\\focus\ area};

  \node [inner sep=5pt, right of=1, rectangle, draw, thick, rounded corners, minimum size=45pt, text centered]
  (2) {ROI extraction};

  \node [inner sep=5pt, right of=2, rectangle, draw, thick, rounded corners, minimum size=45pt, text centered]
  (3) {normalization};

  \node [inner sep=5pt, right of=3, rectangle, draw, thick, rounded corners, minimum size=45pt, text centered, align=center]
  (4) {predict\\largest\ ROI};

  \node [inner sep=0pt, right of=4, label=below:display out] (5) {\includegraphics[width=85px]
    {assets/images/digits/iosout.png}};

    % Draw edges
    \path [draw, thick,  -latex'] (0) -- (1);
    \path [draw, thick,  -latex'] (1) -- (2);
    \path [draw, thick,  -latex'] (2) -- (3);
    \path [draw, thick,  -latex'] (3) -- (4);
    \path [draw, thick,  -latex'] (4) -- (5);
    \path[draw, thick,  -latex', rounded corners] (5.north) -- ++(0pt, +20pt) -- ++(-498pt, 0pt) -- (0.north);
    \end{tikzpicture}

\end{document}
{% endlatex %}
