{% latex
  train;
  Algorithm 1.;
  Training procedure involving hyper parameter + topology search combined with a model selection scheme inspired by early stopping.
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

\begin{document}
\begin{algorithmic}[1]

\Function {\bf TrainMNIST}{$T, V, E, \Theta, B, A, best_{max}$}:
\Statex {\normalsize $T = \textrm{test set};\ V = \textrm{validation set};\ E = \textrm{total epochs to train},\ \Theta = \textrm{topologies}$}
\Statex {\normalsize $B = \textrm{batch sizes};\ A = \textrm{learn rates};\ best_{max} = \textrm{how many high scoring models to keep}$}
\Statex
  \State $best \gets queue(best_{max})$
  \State $stats \gets \{\}$
  \Statex
  \For{$topology, batchSize, \alpha \in \Theta \times B \times A$}
    \State $m \gets Model(in \rightarrow topology \rightarrow Loss)$
    \State
    \While{$\neg diverged(m) \land e < epochs$}
      \For{$x_T, y_T \in batches(T, batchSize)$}\Comment{train}
        \State $loss_T, \hat y_T \gets m(x_T, y_T)$
        \State $optimize(m, \alpha, \beta=0.9)$
      \EndFor
      \Statex
      \State $x_V, y_V \gets V$\Comment{validate}
      \State $loss_V, \hat y_V \gets m(x_V, y_V)$
      \State $a \gets \Call{accuracy}{y_V, \hat y_V}$
      \Statex
      \If{$a > best.last$}\Comment{keep best model}
        \State $m_e \gets \Call{copy}{m}$
        \State $best.push(m_e)$
      \EndIf
      \Statex
    \EndWhile
  \EndFor
\State \textbf{return} $stats, best$
\EndFunction

\end{algorithmic}
\end{document}

{% endlatex %}
