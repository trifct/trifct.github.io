# 第十章：溶液与多相混合物

## 多相混合物的相平衡与相律

### 混合物相平衡

以某两种含 $C$ 种组分的均相混合物 $A$ + $B$ 为例，对每个组分（以第 $i$ 个组分为例）都有：

$$
i(A) \rightleftharpoons i(B)
$$

$$
d \xi_i = dn_{i(A)} = dn_{i(B)}
$$

$$
\Big(\frac{\partial G}{\partial \xi_i}\Big)_{T, p, n \ne n_i}\Bigg|_{平衡} = 0
$$

$$
\because G = \sum_{i(A)} n_{i(A)}\mu_{i(A)} + \sum_{i(B)} n_{i(B)}\mu_{i(B)}
$$

$$
\therefore \Big(\frac{\partial G}{\partial \xi_i}\Big)_{T, p, n \ne n_i}\Bigg|_{平衡} = -\mu_{i(A)} + \mu_{i(B)}
$$

即平衡时有：

$$
\mu_{i(A)} = \mu_{i(B)}
$$

对于有 $P$ 个相的系统，有：

$$
\mu_{i(A)} = \mu_{i(B)} = \dots = \mu_{i(P)}
$$

回到任意两相的 $C$ 个组分，

$$
\mu_{1(A)} = \mu_{1(B)} \ \dots \ \mu_{i(A)} = \mu_{i(B)} \ \dots \ \mu_{C(A)} = \mu_{C(B)}
$$

### 吉布斯相律

$$
G = f(T, p, n, \chi_1, \chi_2, \dots, \chi_{(C-1)})
$$

其中 $n$ 与相平衡无关。

对任意一相，$F_{A相} = 2 + C - 1$；对 $P$ 个相，$F_{相极大} = 2 + (C-1)P$

已知相平衡的每个等式都可以消去一个自由度，因此对 $C$ 组分 $P$ 相有：

$$
F = 2 + (C - 1)P - C(P - 1) = 2 + C - P
$$

考虑纯态，

$$
P_{min} = 1 \qquad F_{相} = 2 + 1 - 1 = 2
$$

$$
P = 3 \qquad F = 2 + 1 - 3 = 0 \Rightarrow 三相点固定
$$

$$
P = 2 \qquad F = 2 + 1 - 2 = 1 \Rightarrow 两相平衡成线
$$

### 理想混合物的二组分气-液平衡相图 p-z

$$
F = 1 + C - P = 2 \quad (p, z_1)
$$

对稳定气相，$z_1 = \tau_1$；对稳定液相，$z_1 = \chi_1$；对三个稳定相，$z_1 = \frac{n_{1(A)} + n_{1(B)}}{n_1 + n_2}$

$$
\left\{
    \begin{aligned}
        &\chi_1 p_1^* = p_1 = \tau_1 p (平衡条件) \\
        &p = p_1 + p_2 = \chi_1 p_1^* + (1-\chi_1)p_2^* = (p_1^* - p_2^*)\chi_1 + p_2^* (分压定律) \\
    \end{aligned}
\right.
$$

平衡液相边界线：

$$
p = (p_1^* - p_2^*)\chi_1 + p_2^*
$$

平衡气相边界线：

$$
p = \frac{p_1^*}{\tau_1} \cdot \frac{p - p_1^*}{p_1^* - p_2^*}
$$

![气液相图p-z](../../../assets/img/notes/物理化学/物理化学 2/气液相图p-z.png)

### 理想混合物的二组分气-液平衡相图 T-z

![气液相图T-z](../../../assets/img/notes/物理化学/物理化学 2/气液相图T-z.png)

### 理想混合物的二组分液-液相图 T-z

![液液](../../../assets/img/notes/物理化学/物理化学 2/液液.png)

### 理想混合物的二组分液-固相图 T-z

![液固](../../../assets/img/notes/物理化学/物理化学 2/液固.png)