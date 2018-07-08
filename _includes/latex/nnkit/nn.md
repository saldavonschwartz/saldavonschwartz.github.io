{% latex
  nn;
  Figure 1.;
  3-class, 3-3 classifier neural net. Superscripts = layer index, subscripts = units.
  Constant dummy nodes are inserted to multiply the bias terms
%}
\documentclass[tikz, border=0pt]{standalone}
\begin{document}
\def\layersep{6cm}
\def\layervert{3.5}

\begin{tikzpicture}[->,draw=black!60, node distance=\layersep]
    \tikzstyle{every pin edge}=[<-,shorten <=1pt]
    \tikzstyle{neuron}=[circle,fill=black, line width=1.5pt, minimum size=40pt,inner sep=1pt]
    \tikzstyle{input neuron}=[neuron, draw, fill=none];
    \tikzstyle{annot} = [text centered]

    % input:
    \foreach \name / \y in {0,...,1}
        \node[input neuron] (I-\y) at (0,-\y*\layervert) {$x_\y$};

    \node[input neuron, pin={[pin edge={<-}]left:dummy 1}] (I-2) at (0,-3*\layervert) {$x_2$};

    % hidden:
    \foreach \name / \y in {0,...,2}
        \node[input neuron] (H-\y) at (\layersep, -\y*\layervert) {\scriptsize $u^{(1)}_\y:\sum|\mathrm{ReLU}$};

    \node[input neuron, pin={[pin edge={<-}]left:dummy 1}] (H-3) at (\layersep,-3*\layervert) {$u^{(1)}_3$};

    % out:
    \foreach \name / \y in {0,...,2}
        \node[input neuron, pin={[pin edge={->}]right:$P(Class_\y | \mathbf{x})$}] (O-\y) at (\layersep*2, -\y*\layervert) {\scriptsize $u^{(2)}_\y:\sum|\mathrm{smax}$};

    % l0 - l1:
    \foreach \dest in {0,...,2}
      \draw (I-0) -- (H-\dest) node [near start, above] {\scriptsize $w^{(1)}_{0\dest}$};

    \foreach \dest in {0,...,2}
      \draw (I-1) -- (H-\dest) node [near start, above] {\scriptsize $w^{(1)}_{1\dest}$};

    \foreach \dest in {0,...,2}
      \draw (I-2) -- (H-\dest) node [near start, above] {\scriptsize $b^{(1)}_{2\dest}$};

    % l1 - l2:
    \foreach \dest in {0,...,2}
      \draw (H-0) -- (O-\dest) node [near start, above=5pt] {\scriptsize $w^{(2)}_{0\dest}$};

    \foreach \dest in {0,...,2}
      \draw (H-1) -- (O-\dest) node [near start, above] {\scriptsize $w^{(2)}_{1\dest}$};

    \foreach \dest in {0,...,2}
      \draw (H-2) -- (O-\dest) node [near start] {\scriptsize $w^{(2)}_{2\dest}$};

    \foreach \dest in {0,...,2}
      \draw (H-3) -- (O-\dest) node [near start, above] {\scriptsize $b^{(2)}_{3\dest}$};

    % layer labels:
    \node[annot, above of=I-0, node distance=1.5cm] {$L_0$ (Input)};
    \node[annot, above of=H-0, node distance=1.5cm] {$L_1$ (Hidden)};
    \node[annot, above of=O-0, node distance=1.5cm] {$L_2$ (Output)};

\end{tikzpicture}
% End of code
\end{document}
{% endlatex %}
