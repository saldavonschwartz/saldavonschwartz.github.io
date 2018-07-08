{% latex
  dqngraph;
  Figure 1.;
  FFN-based Q-function. n = batch-size. f = features per state. a = number of actions for a state.
%}
\documentclass[tikz, border=0pt]{standalone}
\usepackage{amsmath, amsfonts}
\usetikzlibrary{shapes, shapes.geometric, decorations, decorations.pathreplacing}
\begin{document}
\def\layersep{2.5cm}
\def\layervert{-2.5}

\begin{tikzpicture}[->,draw=black!50, node distance=\layersep, square/.style={regular polygon, regular polygon sides=4}]
    \tikzstyle{every pin edge}=[<-,shorten <=1pt]
    \tikzstyle{var}=[circle, draw, fill=none, line width=1.5pt, minimum size=40pt, inner sep=0.5pt]
    \tikzstyle{op}=[square, draw, rounded corners, fill=none, line width=1.5pt, minimum size=50pt, inner sep=0.5pt]
    \tikzstyle{annot} = [text centered]

    % nodes:
    \node[var] (x) at (0,0) {$\mathbf{X}_{n \times f}$};
    \node[var] (w1) at (0,\layervert) {$\boldsymbol{W}_{f \times 512}^{(1)}$};
    \node[op] (m1) at (\layersep, 0) {$\mathrm{Mul}^{(1)}$};
    \node[op] (a1) at (\layersep*2, 0) {$\mathrm{Add}^{(1)}$};
    \node[var] (b1) at (\layersep,\layervert) {$\mathbf{b^T}_{512}^{(1)}$};
    \node[op] (r1) at (\layersep*3, 0) {\scriptsize $\mathrm{ReLU}^{(1)}$};

    \node[var] (w2) at (\layersep*3,\layervert) {$\boldsymbol{W}_{512 \times a}^{(2)}$};
    \node[op] (m2) at (\layersep*4, 0) {$\mathrm{Mul}^{(2)}$};
    \node[var] (b2) at (\layersep*4,\layervert) {$\mathbf{b^T}_{a}^{(2)}$};
    \node[op] (a2) at (\layersep*5, 0) {$\mathrm{Add}^{(2)}$};
    \node (ac) at (\layersep*6.5, 0) {$
      \begin{bmatrix}
      \mathbb{E}[\mathbf{X}_{0}, act_0] & ... & \mathbb{E}[\mathbf{X}_{0}, act_a] \\
      ...\\
      \mathbb{E}[\mathbf{X}_{n}, act_0] & ... & \mathbb{E}[\mathbf{X}_{n}, act_a] \\
      \end{bmatrix}
    $};

    % edges:
    \draw (x) -- (m1) node {};
    \draw (w1) -- (m1.west) node {};
    \draw (m1) -- (a1) node {};
    \draw (b1) -- (a1.west) node {};
    \draw (a1) -- (r1) node {};
    \draw (r1) -- (m2) node {};
    \draw (w2) -- (m2.west) node {};
    \draw (m2) -- (a2) node {};
    \draw (b2) -- (a2.west) node {};
    \draw (a2) node at (\layersep*5.45, 0) {=} (ac);

    % layer labels:
    \node[annot, above of=x, node distance=1.5cm] {$L_0$ (Input)};

    \draw[thick, dashed, decorate, decoration={brace, amplitude=1.5em}, -]
      ([yshift=.7cm]m1.west) -- node[above=1.3em] {$L_1$ (Hidden)} ([yshift=.7cm] r1.east);

    \draw[thick, dashed, decorate, decoration={brace, amplitude=1.5em}, -]
      ([yshift=.7cm]m2.west) -- node[above=1.3em] {$L_2$ (Output)} ([yshift=.7cm] a2.east);

\end{tikzpicture}
\end{document}
{% endlatex %}
