# 第九章：溶液的基本性质

## 理想气体混合物

对于纯态有：

$$
\mu = \mu^\circ + RT \ln p
$$

### 分压定律

对第 $i$ 个组分有：

$$
p_i = n_i \frac{RT}{V}, \qquad p = \sum_i p_i = \sum_i n_i \frac{RT}{V}
$$

定义：$\tau_i \equiv \frac{n_i}{\sum_i n_i}$，称为摩尔分数，则：

$$
p_i = \tau_i p
$$

上式为 **道尔顿分压定律** 。

注：老师上课批判了所谓的“分体积定律”，其与量子力学不对付，与气体体积的热力学意义对不上。

### 理想气体混合物的化学势

对于理想气体混合物，第 $i$ 个组分的化学势 $\mu_i$ 满足：

$$
(\frac{\partial \mu_i}{\partial p_i})_{T, n} = (\frac{\partial \mu_i}{\partial p})_{T, n} (\frac{\partial p}{\partial p_i})_{T, n} = \frac{1}{\tau_i} (\frac{\partial V}{\partial n_i})_{T, p, n \neq n_i} = \frac{1}{\tau_i} \frac{\partial (\sum_i n_i)}{\partial n_i} \frac{RT}{p} =\frac{1}{\tau_i} \frac{RT}{p} = \frac{RT}{p_i}
$$

$$
\therefore \int_{\mu_i^\circ}^{\mu_i} d\mu_i = \int_{p_i^\circ}^{p_i} \frac{RT}{p_i} dp_i \Rightarrow \mu_i = \mu_i^\circ + RT \ln \frac{p_i}{p_i^\circ} = \mu_i^\circ + RT \ln p_i
$$

值得注意的是，$p_i$ 同样以 bar 为单位。

### 理想气体混合物的吉布斯自由势

对于 $T,P$ 给定，小体积 $dV$ 内的 $dG$ ：

$$
dG = \sum_{i=1}^c \mu_i dn_i = \sum_{i=1}^c \mu_i \frac{n_i}{V_0} dV
$$

积分得：

$$
G = \int_0^{V_0} \sum_{i=1}^c \mu_i \frac{n_i}{V_0} dV = \sum_{i=1}^c \mu_i \frac{n_i}{V_0} V_0 = \sum_{i=1}^c n_i \mu_i
$$

### 混合吉布斯自由能

由 A, B 两组分纯态，在 $T, p$ 给定条件下混合，得到给定的混合物。

$$
\Delta_{混}G = \Delta G = G_{混合物} - G_{纯态} = \sum_i n_i \mu_i - \sum_{j(始态)} n_j \mu_j
$$

由前述公式，

$$
\mu_i = \mu_i^\circ + RT \ln p_i
$$

$$
\therefore \Delta_{混}G = \sum_i^c n_i RT \ln \frac{p_i}{p} = \sum_i^c n_i RT \ln \tau_i
$$

### 混合物理量

$$
\Delta_{混}S = -(\frac{\partial (\Delta_{混}G)}{\partial T})_{n,p} = -  \sum_i^c n_i R \ln \tau_i
$$

$$
\Delta_{混}H = \Delta_{混}G + T \Delta_{混}S = 0
$$

$$
\Delta_{混}V = (\frac{\partial \Delta_{混}G}{\partial p})_{n,T} = 0
$$

$$
\Delta_{混}U = \Delta_{混}H - p\Delta_{混}V = 0
$$

因此理想气体混合过程完全由 $\Delta_{混}S$ 驱动。

## 理想溶液

### 模型

$$
\Delta_{混}U = 0 \qquad \Delta_{混}V = 0 \qquad \Delta_{混}H = 0
$$

满足：

- $\varepsilon_{A-A} = \varepsilon_{A-B} = \varepsilon_{B-B}$

- A, B 的尺寸与形貌一致

### 混合熵

$T,P$ 不变，$\Delta_{混}S$ 只有位点分布熵。先考虑二元混合：

$$
W_{纯态} = \frac{(0.5N)!}{N_A !} \frac{(0.5N)!}{N_B !} = 1 \qquad S_{纯态} = 0
$$

$$
W_{混合物} = \frac{N!}{N_A ! N_B !} \qquad S_{混合物} = k\ln W_{混合物}
$$

由斯特林近似：

$$
\Delta_{混}S = k \ln \frac{N!}{N_A ! N_B !} = k [(N\ln N-N) - (N_A\ln N_A-N_A) - (N_B \ln N_B-N_B)]
$$

$$
= k [N_A \ln N + N_B \ln N - N_A \ln N_A - N_B \ln N_B] = \sum_i k N_i \ln \frac{N}{N_i} = \sum_i n_i R \ln \frac{N}{N_i}
$$

定义摩尔分数：

$$
\chi_i = \frac{N_i}{\sum_i N_i} = \frac{n_i}{\sum_i n_i}
$$

$$
\therefore \Delta_{混}S = \sum_i n_i R \ln \frac{N}{N_i} = - \sum_i n_i R \ln \frac{N_i}{N} = - \sum_i n_i R \ln \chi_i
$$

$$
\Delta_{混}G = - T \Delta_{混}S = \sum_i n_i RT \ln \chi_i
$$

### 理想溶液第 i 组分的化学势

$$
G_{混合物} = G_{纯态} + \Delta_{混}G \qquad G_{纯态} = \sum_i n_i \mu_i^*
$$

$$
\mu_i = (\frac{\partial G_{混合物}}{\partial n_i})_{T,p,n \ne n_i} = \mu_i^* + RT \ln \chi_i
$$

### 理想溶液化学势的测量

$$
A(l) \rightleftharpoons A(g)
$$

$$
\mu_{i(l)} = \mu_i^* + RT \ln \chi_i = \mu_i^\circ + RT \ln p_i^* + RT \ln \chi_i 
$$

$$
\mu_{i(g)} = \mu_i^\circ + RT \ln p_i
$$

$$
\therefore p_i = \chi_i p_i^*
$$

## 混合物广度性质

### 偏摩尔广度性质

$T,p$ 给定，对于一个广度性质 $X$，

$$
X = f(T, p, n_1, n_2, \dots, n_c)
$$

$$
d X = \sum_{i=1}^c (\frac{\partial X}{\partial n_i})_{T, p, n \ne n_i} dn_i
$$

定义偏摩尔量：

$$
(\frac{\partial X}{\partial n_i})_{T, p, n \ne n_i} = {^mX_i}
$$

我们已经认识了偏摩尔吉布斯自由能：

$$
^mG_i = \mu_i
$$

### 求单相混合物的广度性质

$$
X_{混合物} = \int_0^{V_0} \sum_i (^mX_i) \frac{n_i}{V_0} dV = \sum_i (^mX_i)
$$

### 吉布斯-杜亥姆方程

$$
dX_{混合物} = \sum_{i=1}^c n_i d(^mX_i) + \sum_{i=1}^c (^mX_i)dn_i = \sum_{i=1}^c (^mX_i)dn_i
$$

$$
\therefore \sum_{i=1}^c n_i d (^mX_i) = 0
$$

取 $X$ 为吉布斯自由能即为**吉布斯-杜亥姆方程**。

## 实际假设

### 非理想溶液的普遍性

非理想液体更为常见：

- 任意固态或气态组分溶于液态溶剂

- 液体-液体
    - 频率不匹配：无机(水)+非极性有机
    - 接触构型匹配：乙醇+水

### 实际溶液

- 传统模型

$$
\left\{
    \begin{aligned}
        & 正则溶液 (regular\ solution)，\Delta_{混}H \ne 0，\Delta_{混(非)}S = 0 \\
        & 无热溶液 (athemal\ solution)，\Delta_{混}H = 0，\Delta_{混(非)}S \ne 0 \\
    \end{aligned}
\right.
$$

- 分子间相互作用匹配驱动的非理想溶液：乙醇 + 水

- 非理想混合熵驱动的非理想溶液：$C_{16}H_{34}$ + 苯；聚苯乙烯 + 甲苯

### 实际溶液的混合熵

$$
G_{混合物} = G_{纯态} + \Delta_{混}G \qquad G_{混合物} = \sum_i n_i \mu_i
$$

$$
G_{纯态} = \sum_i n_i \mu_i^* \qquad \Delta_{混}G = \sum_i n_i RT \ln \chi_i + \sum_i n_i RT \ln \gamma_i
$$

定义：

$$
\mu_i \equiv \mu_i^* + RT \ln \alpha_i \qquad \alpha_i \equiv \gamma_i \chi_i
$$

对理想溶液，$\gamma_i \equiv 1$，活度系数是溶液函数

### 活度系数的实验测定

$$
A (aq) \stackrel{T, p}{\rightleftharpoons} A(g)
$$

$$
\mu_A^\circ + RT\ln p_A^* + RT\ln \alpha_A = \mu_{A(aq)} = \mu_{A(g)} = \mu_A^\circ +RT\ln p_A
$$

$$
\ln(\alpha_A p_A^*) = \ln p_A \qquad \alpha_A = \frac{p_A}{p_A^*}, \gamma_A = \frac{p_A}{p_A^* \chi_A}
$$

$$
\sum_i n_i d\mu_i = 0 \Rightarrow n_i d\mu_i^* + n_i d[RT\ln \chi_i] + n_i d[RT\ln \gamma_i] = 0
$$

### 混合广度性质与活度系数

$$
G_{混合物} = G_{纯态} + \Delta_{混}G
$$

$$
\Delta_{混}G = \Delta_{混(理)}G + \Delta_{混(非)}G = \sum_i n_i RT \ln \chi_i + \sum_i n_i RT \ln \gamma_i
$$

$$
\Delta_{混}S = -(\frac{\partial \Delta_{混}G}{\partial T})_{p,n} = - \sum_i n_i R \ln \chi_i - \sum_i n_i R \ln \gamma_i - \sum_i n_i RT (\frac{d\ln \gamma_i}{dT})_{p,n}
$$

$$
\Delta_{混}H = \Delta_{混}G + T \Delta_{混}S = - \sum_i n_i RT^2 (\frac{d\ln \gamma_i}{dT})_{p,n}
$$

$$
\Delta_{混}V = (\frac{\partial \Delta_{混}G}{\partial p})_{T,n} = \sum_i n_i RT (\frac{d \ln \gamma_i}{dp})_{T,n}
$$

$$
\begin{aligned}
\Delta_{混}U = \Delta_{混}H - p \Delta_{混}V &= - (\sum_i n_i RT^2 (\frac{d\ln \gamma_i}{dT})_{p,n} + \sum_i n_i RTp (\frac{d \ln \gamma_i}{dp})_{T,n})\\
&= - (\sum_i n_i RT (\frac{d\ln \gamma_i}{d \ln T})_{p,n} + \sum_i n_i RT (\frac{d \ln \gamma_i}{d \ln p})_{T,n})
\end{aligned}
$$