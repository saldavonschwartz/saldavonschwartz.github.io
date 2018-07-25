{% latex
  processing;
  Figure 5.;
  Processing of raw features in a digit before prediction.
%}
\documentclass[tikz, border=0pt]{standalone}
\usetikzlibrary{shapes,arrows, calc}

\begin{document}

\centering
\begin{tikzpicture}[node distance = 4cm, auto]
    \node [inner sep=0pt, label=below:black and white image] (1) {\includegraphics[width=20px]
      {assets/images/digits/7-07-10-roi.png}};

    \node [inner sep=0pt, right of=1, label=below:dilate + resize 20x20] (2) {\includegraphics[width=50px]
      {assets/images/digits/7-09-10-resize20.png}};

    \node [inner sep=0pt, right of=2, label=below:pad 4x4 (total 28x28)] (3) {\includegraphics[width=50px]
      {assets/images/digits/7-10-10-pad4.png}};

    \node [inner sep=0pt, right of=3, label=below:center of mass + dilate] (4) {\includegraphics[width=50px]
      {assets/images/digits/7-11-10-center.png}};

    \node [right of=4] (5) {prediction};

    % Draw edges
    \path [draw, thick,  -latex'] (1) -- (2);
    \path [draw, thick,  -latex'] (2) -- (3);
    \path [draw, thick,  -latex'] (3) -- (4);
    \path [draw, thick,  -latex', dotted] (4) -- (5);
    \end{tikzpicture}

\end{document}
{% endlatex %}
