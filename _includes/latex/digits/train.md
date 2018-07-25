{% latex
  train;
  Algorithm 1.;
  Training with hyperparameter / topology search combined with checkpoints based on validation accuracy.
%}
\documentclass[preview, border=10pt]{standalone}

\usepackage{amsfonts}
\usepackage[noend]{algpseudocode}
\usepackage[paperwidth=500pt, paperheight=430pt, margin=0pt]{geometry}
\usepackage{mathtools}
\algrenewcommand\algorithmicrequire{ \textbf{where:}}
\newcommand{\R}{\mathbb{R}}

\makeatletter
\renewcommand{\ALG@beginalgorithmic}{\large}
\makeatother
\algrenewcommand\algorithmicfunction{\textbf{def}}
\newcommand{\func}[1]{\operatorname{#1}}
\newcommand{\defeq}{\vcentcolon=}
\newcommand{\pluseq}{\stackrel{+}\gets}

\begin{document}
\begin{algorithmic}[1]

\Function {\bf TrainMNIST}{$T, V, e_{max}, \Theta, B, A, best_{max}$}:
\Statex {\normalsize $T = \textrm{training set};\ V = \textrm{validation set};\ e_{max} = \textrm{total training epochs},\ \Theta = \textrm{topologies}$}
\Statex {\normalsize $B = \textrm{batch sizes};\ A = \textrm{learn rates};\ best_{max} = \textrm{number of checkpoints to keep}$}
\Statex
  \State $best \gets queue(best_{max})$
  \Statex
  \For{$\theta, b, \alpha \in \Theta \times B \times A$}
    \State $m: \R^{n \times 784} \rightarrow \R^{n \times 10} \defeq \func{FFN}(\theta, smax_{10})$\Comment{net topology + 10-unit smax layer}
    \State $e \gets 0$
    \Statex
    \For{$e \in [1, e_{max}]$}
      \State $shuffle(T)$\Comment{1. train}
      \Statex
      \For{$\mathbf{X}_t, \mathbf{Y}_t \in minibatch(T, b)$}
        \State $\mathbf{\hat Y}_t \gets m(\mathbf{X}_t)$
        \State $optimize(m, L(\mathbf{\hat Y}_t, \mathbf{Y}_t), \alpha)$
      \EndFor
      \Statex
      \State $\mathbf{X}_v, \mathbf{Y}_v \gets V$\Comment{2. validate}
      \State $\mathbf{\hat Y}_v \gets m(\mathbf{X}_v)$
      \State $a \gets accuracy(\mathbf{\hat Y}_v, \mathbf{Y}_v)$
      \Statex
      \If{$a > best.last$}\Comment{keep best checkpoint}
        \State $m_e \gets copy(m)$
        \State $best.push(m_e)$
      \EndIf
    \EndFor
  \EndFor
  \Statex
\State \textbf{return} $best$
\EndFunction

\end{algorithmic}
\end{document}

{% endlatex %}
