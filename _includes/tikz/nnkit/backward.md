{% latex backward, "<strong>Figure 4.</strong> "Backward pass of the computation graph from Figure 2. Each node's <strong>g</strong> attribute holds the result of the application of chain rule from left to right.%}
\documentclass[tikz, border=0pt]{standalone}
\usepackage{amsmath}
\usetikzlibrary{decorations, decorations.pathreplacing}
\begin{document}
\Large
\def\layersep{4cm}
\def\layervert{-2.5}

\begin{tikzpicture}[<-,draw=black!50, node distance=\layersep, square/.style={regular polygon, regular polygon sides=4}]
    \tikzstyle{every pin edge}=[<-,shorten <=1pt]
    \tikzstyle{annot} = [text centered]

    % nodes:
    \node (x) at (0,0) {
      $\frac{\partial Mul^{(1)}}{\partial \mathbf{x}}$
    };

    \node (w1) at (0,\layervert) {
      $\frac{\partial Mul^{(1)}}{\partial \boldsymbol{W}^{(1)}}$
    };

    \node (m1) at (\layersep, 0) {
      $\frac{\partial Add^{(1)}}{\partial Mul^{(1)}}$
    };

    \node (a1) at (\layersep*2, 0) {
      $\frac{\partial ReLU^{(1)}}{\partial Add^{(1)}}$
    };

    \node (b1) at (\layersep,\layervert) {
      $\frac{\partial Add^{(1)}}{\partial \mathbf{b}^{(1)}}$
    };

    \node (r1) at (\layersep*3, 0) {
      $\frac{\partial Mul^{(2)}}{\partial ReLU^{(1)}}$
    };

    \node (w2) at (\layersep*3,\layervert) {
      $\frac{\partial Mul^{(2)}}{\partial \boldsymbol{W}^{(2)}}$
    };

    \node (m2) at (\layersep*4, 0) {
      $\frac{\partial Add^{(2)}}{\partial Mul^{(2)}}$
    };

    \node (a2) at (\layersep*5, 0) {
      $\frac{\partial SMax^{(2)}_i}{\partial Add^{(2)}_i}$
    };

    \node (b2) at (\layersep*4,\layervert) {
      $\frac{\partial Add^{(2)}}{\partial \mathbf{b}^{(2)}}$
    };

    \node (s2) at (\layersep*6, 0) {
      $\frac{\partial SMax^{(2)}}{\partial SMax^{(2)}} = 1$
    };

    % edges:
    \draw (x) -- node [above] {$\cdot$}  (m1) node {};
    \draw (w1) -- node [above] {$\cdot$}  (m1) node {};
    \draw (m1) -- node [above] {$\cdot$}  (a1) node {};
    \draw (b1) -- node [above] {$\cdot$}  (a1) node {};
    \draw (a1) -- node [above] {$\cdot$}  (r1) node {};
    \draw (r1) -- node [above] {$\cdot$}  (m2) node {};
    \draw (w2) -- node [above] {$\cdot$}  (m2) node {};
    \draw (m2) -- node [above] {$\cdot$} (a2) node {};
    \draw (b2) -- node [above] {$\cdot$} (a2) node {};
    \draw (a2) -- node [above] {$\cdot$} (s2) node {};

    % layer labels:
    \node[annot, above of=x, node distance=1.7cm] {$L_0$ (Input)};

    \draw[thick, dashed, decorate, decoration={brace, amplitude=1.5em}, -]
      ([yshift=.7cm]m1.west) -- node[above=1.3em] {$L_1$ (Hidden)} ([yshift=.7cm] r1.east);

    \draw[thick, dashed, decorate, decoration={brace, amplitude=1.5em}, -]
      ([yshift=.7cm]m2.west) -- node[above=1.3em] {$L_2$ (Output)} ([yshift=.7cm] s2.east);

\end{tikzpicture}
\end{document}
{% endlatex %}
