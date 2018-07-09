{% latex
  graph;
  Figure 2.;
  3-class, 3-3 classifier computation graph. Superscripts = (implicit) layers. Subscripts = variable dimensions. Output transposed for legibility.
%}
\documentclass[tikz, border=0pt]{standalone}
\usepackage{amsmath}
\usetikzlibrary{shapes, shapes.geometric, decorations, decorations.pathreplacing}
\begin{document}
\def\layersep{3cm}
\def\layervert{-2.5}

\begin{tikzpicture}[->,draw=black!60, node distance=\layersep, square/.style={regular polygon, regular polygon sides=4}]
    \tikzstyle{every pin edge}=[<-,shorten <=1pt]
    \tikzstyle{var}=[circle, draw, fill=none, line width=1.5pt, minimum size=40pt, inner sep=0.5pt]
    \tikzstyle{op}=[square, draw, rounded corners, fill=none, line width=1.5pt, minimum size=50pt, inner sep=0.5pt]
    \tikzstyle{annot} = [text centered]

    % nodes:
    \node[var] (x) at (0,0) {$\mathbf{x}_{2}$};
    \node[var] (w1) at (0,\layervert) {$\mathbf{W}^{(1)}_{2 \times 3}$};
    \node[op] (m1) at (\layersep, 0) {$\mathrm{mul^{(1)}}$};
    \node[op] (a1) at (\layersep*2, 0) {$\mathrm{add^{(1)}}$};
    \node[var] (b1) at (\layersep,\layervert) {$\mathbf{b}^{(1)}_{3}$};
    \node[op] (r1) at (\layersep*3, 0) {\scriptsize $\mathrm{ReLU^{(1)}}$};

    \node[var] (w2) at (\layersep*3,\layervert) {$\mathbf{W}^{(2)}_{3 \times 3}$};
    \node[op] (m2) at (\layersep*4, 0) {$\mathrm{mul^{(2)}}$};
    \node[op] (a2) at (\layersep*5, 0) {$\mathrm{add^{(2)}}$};
    \node[var] (b2) at (\layersep*4,\layervert) {$\mathbf{b}^{(2)}_{3}$};
    \node[op, pin={[pin edge={->}]right:
    $
    \begin{bmatrix}P(Class_0 | \mathbf{x}) \\ P(Class_1 | \mathbf{x}) \\ P(Class_2 | \mathbf{x})\end{bmatrix}^{\mathbf{T}}
    $}] (s2) at (\layersep*6, 0) {\scriptsize $\mathrm{smax^{(2)}}$};

    % edges:
    \draw (x) -- (m1) node {};
    \draw (w1) -- (m1) node {};
    \draw (m1) -- (a1) node {};
    \draw (b1) -- (a1) node {};
    \draw (a1) -- (r1) node {};
    \draw (r1) -- (m2) node {};
    \draw (w2) -- (m2) node {};
    \draw (m2) -- (a2) node {};
    \draw (b2) -- (a2) node {};
    \draw (a2) -- (s2) node {};

    % layer labels:
    \node[annot, above of=x, node distance=1.5cm] {$L_0$ (Input)};

    \draw[thick, dashed, decorate, decoration={brace, amplitude=1.5em}, -]
      ([yshift=.7cm]m1.west) -- node[above=1.3em] {$L_1$ (Hidden, 2-in, 3-out)} ([yshift=.7cm] r1.east);

    \draw[thick, dashed, decorate, decoration={brace, amplitude=1.5em}, -]
      ([yshift=.7cm]m2.west) -- node[above=1.3em] {$L_2$ (Output, 3-in, 3-out)} ([yshift=.7cm] s2.east);

\end{tikzpicture}
\end{document}
{% endlatex %}
