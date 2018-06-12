{% latex graph, "<strong>Figure 2.</strong> Computation Graph for classifier model defined in Eq. 1. Subscripts denote implicit layers. There are no explicit layers but variables and operators. Operators derive their shape (in, out) from their operands."%}
\documentclass[tikz, border=0pt]{standalone}
\usepackage{amsmath}
\usetikzlibrary{shapes, shapes.geometric, decorations, decorations.pathreplacing}
\begin{document}
\def\layersep{3cm}
\def\layervert{-2.5}

\begin{tikzpicture}[->,draw=black!50, node distance=\layersep, square/.style={regular polygon, regular polygon sides=4}]
    \tikzstyle{every pin edge}=[<-,shorten <=1pt]
    \tikzstyle{var}=[circle, draw, fill=none, line width=1.5pt, minimum size=40pt, inner sep=0.5pt]
    \tikzstyle{op}=[square, draw, rounded corners, fill=none, line width=1.5pt, minimum size=50pt, inner sep=0.5pt]
    \tikzstyle{annot} = [text centered]

    % nodes:
    \node[var] (x) at (0,0) {$\mathbf{x}_{1,2}$};
    \node[var] (w1) at (0,\layervert) {$\boldsymbol{W^{(1)}_{2,3}}$};
    \node[op] (m1) at (\layersep, 0) {$\mathrm{Mul^{(1)}}$};
    \node[op] (a1) at (\layersep*2, 0) {$\mathrm{Add^{(1)}}$};
    \node[var] (b1) at (\layersep,\layervert) {$\mathbf{b^{(1)}_{1,3}}$};
    \node[op] (r1) at (\layersep*3, 0) {\scriptsize $\mathrm{ReLU^{(1)}}$};

    \node[var] (w2) at (\layersep*3,\layervert) {$\boldsymbol{W^{(2)}_{3,3}}$};
    \node[op] (m2) at (\layersep*4, 0) {$\mathrm{Mul^{(2)}}$};
    \node[op] (a2) at (\layersep*5, 0) {$\mathrm{Add^{(2)}}$};
    \node[var] (b2) at (\layersep*4,\layervert) {$\mathbf{b^{(2)}_{1,3}}$};
    \node[op, pin={[pin edge={->}]right:$P(Class | \mathbf{x})_{1,3}$}] (s2) at (\layersep*6, 0) {\scriptsize $\mathrm{SMax^{(2)}}$};

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
      ([yshift=.7cm]m1.west) -- node[above=1.3em] {$L_1$ (Hidden)} ([yshift=.7cm] r1.east);

    \draw[thick, dashed, decorate, decoration={brace, amplitude=1.5em}, -]
      ([yshift=.7cm]m2.west) -- node[above=1.3em] {$L_2$ (Output)} ([yshift=.7cm] s2.east);

\end{tikzpicture}
\end{document}
{% endlatex %}
