{% latex train, "<strong>Algorithm 1:</strong> Training procedure involving hyperparameter + topology search combined with a model selection scheme inspired by early stopping." %}

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

\begin{document}
\begin{algorithmic}[1]

\Function {\bf TRAIN}{$T, V, epochs, \theta, B, A, keepBest$}:
%\Statex {\bf function TRAIN}($T, V, epochs, L, B, A, keepBest$):
\Statex \textbf{inputs:} T = \textrm{test set}, V = \textrm{validation set}, epochs = \textrm{total epochs to train}, $\theta$ = \textrm{topologies},
\Statex \quad\quad\quad\quad B = \textrm{batch sizes}, A = \textrm{learn rates}, keepBest = \textrm{how many high scoring models to keep}
\Statex
  \State $best \gets queue(size=keepBest)$
  \State $stats \gets \{\}$
  \State

  \For{$topology, batchSize, \alpha \in \theta \times B \times A$}
    \State $m \gets Model(in \rightarrow topology \rightarrow Loss)$
    \State
    \While{$\neg \Call{diverged}{m} \land e < epochs$}
      \For{$x_T, y_T \in batches(T, batchSize)$}\Comment{train}
        \State $loss_T, \hat y_T \gets m(x_T, y_T)$
        \State $\Call{optimize}{m, \alpha, \beta=0.9}$
      \EndFor
      \State
      \State $x_V, y_V \gets V$\Comment{validate}
      \State $loss_V, \hat y_V \gets m(x_V, y_V)$
      \State $a \gets \Call{accuracy}{y_V, \hat y_V}$
      \State
      \If{$a > best.last$}\Comment{keep best model}
        \State $m_e \gets \Call{copy}{m}$
        \State $best.push(m_e)$
      \EndIf
      \State
      \State $k \gets (epochs, layers, batchSize, \alpha)$\Comment{log stats}
      \State $stat \gets (e, loss_T, loss_V, a)$
      \State $stats[k] \stackrel{+}\gets stat$
    \EndWhile
  \EndFor
\State \textbf{return} $stats, best$
\EndFunction

\end{algorithmic}
\end{document}

{% endlatex %}
