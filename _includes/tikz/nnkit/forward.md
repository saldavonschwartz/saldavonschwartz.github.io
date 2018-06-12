{% latex forward, "<strong>Figure 3.</strong> "Forward pass of the computation graph from Figure 2. Node values are accessible thru their <strong>data</strong> property (operator values transposed for legibility).%}
\documentclass[tikz, border=0pt]{standalone}
\usepackage{amsmath}
\usetikzlibrary{decorations, decorations.pathreplacing}
\begin{document}
\Large
\def\layersep{4cm}
\def\layervert{-2.5}

\begin{tikzpicture}[->,draw=black!50, node distance=\layersep, square/.style={regular polygon, regular polygon sides=4}]
    \tikzstyle{every pin edge}=[<-,shorten <=1pt]
    \tikzstyle{annot} = [text centered]

    % nodes:
    \node (x) at (0,0) {$\begin{bmatrix}x_0 & x_1 \end{bmatrix}$};

    \node (w1) at (0,\layervert) {
      $\begin{bmatrix}
      w^{{1}}_{00} & w^{{1}}_{01} & w^{{1}}_{02} \\
      w^{{1}}_{10} & w^{{1}}_{11} & w^{{1}}_{12}
      \end{bmatrix}$
    };

    \node (m1) at (\layersep, 0) {
      $\begin{bmatrix}
      Mul^{(1)}_0 \\ Mul^{(1)}_1 \\ Mul^{(1)}_2
      \end{bmatrix}^\mathbf{T}$
    };

    \node (a1) at (\layersep*2, 0) {
      $\begin{bmatrix}
      Add^{(1)}_0 \\ Add^{(1)}_1 \\ Add^{(1)}_2
      \end{bmatrix}^\mathbf{T}$
    };

    \node (b1) at (\layersep,\layervert) {
      $\begin{bmatrix}
      b^{(1)}_0 & b^{(1)}_1 & b^{(1)}_2
      \end{bmatrix}$
    };

    \node (r1) at (\layersep*3, 0) {
      $\begin{bmatrix}
      ReLU^{(1)}(Add^{(1)}_0)_0 \\ ReLU^{(1)}(Add^{(1)}_1)_1 \\ ReLU^{(1)}(Add^{(1)}_2)_2
      \end{bmatrix}^\mathbf{T}$
    };

    \node (w2) at (\layersep*3,\layervert) {
      $\begin{bmatrix}
      w^{{2}}_{00} & w^{{2}}_{01} & w^{{2}}_{02} \\
      w^{{2}}_{10} & w^{{2}}_{11} & w^{{2}}_{12} \\
      w^{{2}}_{20} & w^{{2}}_{21} & w^{{2}}_{22}
      \end{bmatrix}$
    };

    \node (m2) at (\layersep*4, 0) {
      $\begin{bmatrix}
      Mul^{(2)}_0 \\ Mul^{(2)}_1 \\ Mul^{(2)}_2
      \end{bmatrix}^\mathbf{T}$
    };

    \node (a2) at (\layersep*5, 0) {
      $\begin{bmatrix}
      Add^{(2)}_0 \\ Add^{(2)}_1 \\ Add^{(2)}_2
      \end{bmatrix}^\mathbf{T}$
    };

    \node (b2) at (\layersep*4,\layervert) {
      $\begin{bmatrix}
      b^{(2)}_0 & b^{(2)}_1 & b^{(2)}_2
      \end{bmatrix}$
    };

    \node (s2) at (\layersep*6, 0) {
      $\begin{bmatrix}
      SMax^{(2)}(Add^{(2)}_0)_0 \\ SMax^{(2)}(Add^{(2)}_1)_1 \\ SMax^{(2)}(Add^{(2)}_2)_2
      \end{bmatrix}^\mathbf{T}$
    };

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
    \node[annot, above of=x, node distance=2cm] {$L_0$ (Input)};

    \draw[thick, dashed, decorate, decoration={brace, amplitude=1.5em}, -]
      ([yshift=1cm]m1.west) -- node[above=1.3em] {$L_1$ (Hidden)} ([yshift=1cm] r1.east);

    \draw[thick, dashed, decorate, decoration={brace, amplitude=1.5em}, -]
      ([yshift=1cm]m2.west) -- node[above=1.3em] {$L_2$ (Output)} ([yshift=1cm] s2.east);

\end{tikzpicture}
\end{document}
{% endlatex %}
