{% latex
  q-learning;
  Algorithm 1.;
  Q-Learning an optimal policy over a finite number of timesteps.
%}
\documentclass[preview, border=0pt]{standalone}
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

\newcommand{\defeq}{\vcentcolon=}

\begin{document}
\begin{algorithmic}[1]
  \Function {\bf Q-Learning}{$env, t_{max}, \alpha, \gamma, \epsilon$}:
  \Statex {\normalsize $env = \textrm{environment}; t_{max} = \textrm{timesteps to train for}; \alpha = \textrm{learning rate}$}
  \Statex {\normalsize $\gamma = \textrm{discount factor}; \epsilon = \textrm{probability that chosen action is random}$}
  \Statex
  \State $Q \gets \textrm{empty table}$
  \State $s_0 \gets env.reset()$
  \State $t \gets 0$
  \Statex
  \While{$t < t_{max}$}
  \State $a_0 \gets \epsilon{\operatorname{-}}greedy(\epsilon, \underset{a}{\operatorname{argmax}}\ Q(s_0, a))$
  \State $s_1, r_1, done \gets env.step(a_0)$
  \State $sample \gets r_1 + \gamma\underset{a}{\operatorname{max}}\ Q(s_1, a)$
  \State $Q(s_0, a_0) \stackrel{+}\gets \alpha(sample - Q(s_0, a_0))$\Comment{Q-value iteration step}
  \State $t \stackrel{+}\gets 1$
  \Statex
  \If{$done$}
  \State $s_0 \gets env.reset()$
  \Else
  \State $s_0 \gets s_1$
  \EndIf
  \EndWhile
  \Statex
\State \textbf{return} $\pi(s) \defeq \underset{a}{\operatorname{argmax}}\ Q_t(s, a)$
\EndFunction

\end{algorithmic}
\end{document}

{% endlatex %}
