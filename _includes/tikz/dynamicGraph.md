{% tikz dynamicGraph %}
\documentclass{article}

\usepackage{tikz, amsmath}
\usepackage[paperwidth=500pt, paperheight=380pt, margin=0pt]{geometry}
\usetikzlibrary{shapes, arrows, shapes.geometric}

\begin{document}
\begin{figure}
\centering
\begin{tikzpicture}[square/.style={regular polygon, regular polygon sides=4}]

\node at (7, 5) {\LARGE $y = \mathrm{ReLU}(\boldsymbol{W}\mathbf{x} + \mathbf{b})$};

% x:
\draw (0, 0) node[inner sep=0pt, circle, minimum size=30pt, draw, line width=1.5pt] (x) {\LARGE $\mathbf{x}$};
\draw (0, 1) node[] (xData) {$\begin{bmatrix}x_0&x_1\end{bmatrix}$};
\draw (0, -1.7) node[] (xGrad) {$\frac{\partial \mathrm{Mul}}{\partial \mathbf{x}}\frac{\partial \mathrm{Add}}{\partial \mathrm{Mul}}\frac{\partial \mathrm{ReLU}}{\partial \mathrm{Add}}$};

% w:
\draw (0,-4.5) node[inner sep=0pt, circle, minimum size=30pt, draw, line width=2.5pt] (w) {\LARGE $\boldsymbol{W}$};
\draw (0, -3.2) node[] (wData) {$\begin{bmatrix}w_0&w_2&w_4\\w_1&w_3&w_5\end{bmatrix}$};
\draw (0, -5.8) node[] (wGrad) {$\frac{\partial \mathrm{Mul}}{\partial \boldsymbol{W}}\frac{\partial \mathrm{Add}}{\partial \mathrm{Mul}}\frac{\partial \mathrm{ReLU}}{\partial \mathrm{Add}}$};

% mul:
\draw (4, 0) node[inner sep=0pt, square, rounded corners, minimum size=60pt, draw, line width=1.5pt] (mul) {\large $\mathrm{Mul}$};
\draw (4, 2) node[] (mulData) {\large $\begin{bmatrix}x_0 w_0 + x_1 w_1 \\ x_0 w_2 + x_1 w_3 \\ x_0 w_4 + x_1 w_5
\end{bmatrix}^\mathbf{T}$};
\draw (4, -1.7) node[] (mulGrad) {$\frac{\partial \mathrm{Add}}{\partial \mathrm{Mul}}\frac{\partial \mathrm{ReLU}}{\partial \mathrm{Add}}$};

% add:
\draw (8,0) node[inner sep=0pt, square, rounded corners, minimum size=60pt, draw, line width=1.5pt] (add) {\large $\mathrm{Add}$};
\draw (8, 2) node[] (addData) {\large $\begin{bmatrix}x_0w_0+x_1w_1+b_0 \\ x_0w_2+x_1w_3+b_1 \\ x_0w_4+x_1w_5+b_2
\end{bmatrix}^\mathbf{T}$};
\draw (8, -1.7) node[] (addGrad) {$\frac{\partial \mathrm{ReLU}}{\partial \mathrm{Add}}$};

% b:
\draw (4,-4.5) node[inner sep=0pt, circle, minimum size=30pt, draw, line width=2.5pt] (b) {\LARGE $\mathbf{b}$};
\draw (4,-3.2) node[] (bData) {$\begin{bmatrix}b_0&b_1&b_2\end{bmatrix}$};
\draw (4, -5.8) node[] (bGrad) {$\frac{\partial \mathrm{Add}}{\partial \mathbf{b}}\frac{\partial \mathrm{ReLU}}{\partial \mathrm{Add}}$};

% relu:
\draw (12,0) node[inner sep=0pt, square, rounded corners, draw, line width=1.5pt] (relu) {\large $\mathrm{ReLU}$};
\draw (13, 2) node[] (reluData) {\large $\begin{bmatrix} \mathrm{max(0, x_0w_0+x_1w_1+b_0)} \\ \mathrm{max(0, x_0w_2+x_1w_3+b_1)} \\ \mathrm{max(0, x_0w_4+x_1w_5+b_2)}\end{bmatrix}^\mathbf{T}$};
\draw (12, -1.7) node[] (reluGrad) {$1$};

% edge mul,x,w
\draw [<->, line width=1pt] (x.east) -- (mul.west);
\draw [<->, line width=1pt] (w.east) -- (mul.west);

% edge add, mul, b
\draw [<->, line width=1pt] (mul.east) -- (add.west);
\draw [<->, line width=1pt] (b.east) -- (add.west);

% edge relu, add
\draw [<->, line width=1pt] (add.east) -- (relu.west);
\draw (relu) edge [loop right, line width=1pt] node {back}(relu);

\end{tikzpicture}
\caption{Forward / backward pass of a neural network layer involving variables (circular) and operators (squares). Matrices above nodes are their 'data' property while derivatives below nodes are their `g` attribute.}
\end{figure}


\end{document}
{% endtikz %}
