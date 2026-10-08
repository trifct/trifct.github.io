# 第八章：纯物质的体相性质

## 经典气体理论

### 定性模型（实验模型）

- $r_{分子} \ll d_{分子}$

- 无分子间相互作用，弹性碰撞

- 气体分子处于无休止运动

### 定量模型

牛顿定律：单个分子碰撞

$$
p_1 = \frac{F_z}{A} = \frac{2\Delta(m\vec{v})}{A\Delta t}
$$

在 $\Delta t$ 时间内撞击单位面积 $A$ 的分子数 $N_{\Delta t}$：

$$
N_{\Delta t} = \frac{1}{2}\stackrel{-}{v_z}\Delta t A \frac{n N_A}{V}
$$

$$
p = p_1 N_{\Delta t} = \frac{2\Delta(m\vec{v})}{A\Delta t} \cdot \frac{1}{2}\stackrel{-}{v_z}\Delta t A \frac{n N_A}{V}
$$

$$
p = N_A m (\stackrel{-}{v_z})^2 \frac{n}{V} = 2 E_{k,z} \frac{n}{V}
$$

气体动能均分原理：

$$
E_{k,z} = E_{k,x} = E_{k,y} = \frac{1}{3} E_k
$$

## 气体的量子统计热力学

### 理想气体状态方程

$$
p = \frac{\partial A}{\partial V}_{n,T} = nRT(\frac{\partial \ln{\mathscr{f}_{总}}}{\partial V})_{n,T} = nRT(\frac{\partial \ln{V}}{\partial V})_{n,T} = \frac{nRT}{V}
$$

### 定压摩尔热容

$$
C_{p,m} = C_{V,m} + R = \frac{5+F_{转}}{2} R + \sum_{j}{f_j(\mu_1 k_{键})}
$$

- （无机）单原子分子，$C_{p,m} = 2.5R$

- （无机）双原子分子，$C_{p,m} = 3.5R + f(u, k_{键})$

    - 含氢双原子分子，$f \approx 0$

    - 其他共价分子，$\mu \uparrow,\ C_{p,m} \uparrow$，最高到 $4.5R$

    - 活泼的第一主族双原子分子，接近于金属键结合，$k_{键}$ 很小

- （无机）多原子分子

    - H $_n$ X(O, S, N, $\dots$)，$C_{p,m} = 4R + sth.$

- 有机多原子分子

    - 伸缩振动(C-H)可忽略

    - 构象振动

    - 变形振动

    - 重原子效应：重原子取代 H 位置，使得折合质量显然增大。

### 理想气体标准态摩尔熵

标准态定义：

$$
p^{\circ} = 1 \text{bar}, T = 298.15 \text{K}
$$

标准态的理想气体的摩尔体积是一样的，摩尔熵主要由平动贡献，

- 单原子分子

$$
S_{m, 平}^{\circ} = 109 + \frac{3}{2} \ln{M}
$$

$S_{m, 平}^{\circ}$ 的单位是 J/(K $\cdot$ mol)，$M$ 的单位是 g/mol

- 双原子分子的标准态摩尔熵直线比单原子分子大约高 33 J/(K $\cdot$ mol)

- 多原子分子的标准态摩尔熵直线比单原子分子大约高 45 J/(K $\cdot$ mol)

- 有机多原子分子

    - 柔性分子

    以 $S_{m}^{\circ}$ 对分子片段数作图，得到 $y = 162 + 38.4x$

    - 重原子取代同样会导致 $S_{m, 平}^{\circ}$ 升高

### 气体的化学势

纯态：

$$
\mu = G_m = U_m + P V_m - T S_m
$$

以 bar 为气压单位有：

$$
\mu = \mu^\circ + RT \ln{P}
$$

考虑逸度系数 $\gamma$：

$$
\mu = \mu^\circ + RT \ln{\gamma P}
$$

## 纯物质的相变动力学

| 物质 | CsI | CH$_3$(CH$_2$)$_16$CH$_3$ |
| --- | --- | --- |
| m.p. ($^\circ$C) | 700 | 36 |
| $\Delta_{tr}H_m^\circ$ (kJ/mol) | 24 | 68 |

### 相平衡条件

$$
(\frac{\partial G}{\partial \xi})_{T,p} = 0
$$

(1) 定义相变 $G$，

$$
\Delta_{tr} G \equiv (\frac{\partial G}{\partial \xi})_{T,p}
$$

- 与摩尔数无关

- 是状态函数

- 绝大多数情况下，$G \ne \Delta_{tr}G$

(2) 

$$
G = n_1 G_{m1} + n_2 G_{m2}
$$

(3) 

$$
d\xi = dn_2 = -dn_1
$$

$$
dG_m = -S_m dT + V_m dp = 0
$$

$$
\therefore (\frac{\partial G}{\partial \xi})_{T,p} = (\frac{\partial (n_1 G_{m1} + n_2 G_{m2})}{\partial \xi})_{T,p} = G_{m2} - G_{m1} = \mu_2 - \mu_1
$$

状态函数，$T$、$p$ 给定有定值，是强度性质。

$$
\Delta_{tr} G = \Delta_{tr} H - T_{tr} \Delta_{tr} S
$$

平衡要求，

$$
(\frac{\partial G}{\partial \xi})_{T,p(平衡)} = \Delta_{tr} G_{平衡} = \Delta_{tr} H_{平衡} - T_{tr} \Delta_{tr} S_{平衡} = 0, \qquad \Delta_{tr} G_{平衡} = \mu_2 - \mu_1 = 0, \mu_1 = \mu_2
$$

我们主要研究标准态下的情况，实际考虑：

$$
\Delta_{tr} G_{平}^{\circ} = \Delta_{tr} H_{平(b.p.)}^{\circ} - T_{b.p.} \Delta_{tr} S_{平(b.p.)}^{\circ}
$$

实验数据一般是在 $p = 1 \text{bar}$、$T = 298.15 \text{K} \text{或} T_{tr}$ 的条件下测定。

### 热力学(相变)数据计算

![热力学相变](../../../assets/img/notes/物理化学/物理化学 2/热力学相变.jpg)

$$
\begin{aligned}
\Delta_{tr} H_{(2)} &= \Delta H_1 + \Delta_{tr} H_{(1)} + \Delta H_2 \\
&= \Delta_{tr} H_{(1)} + \int_{T_1}^{T_2} C_{p,m1}dT + \int_{T_1}^{T_2} C_{p,m2}dT \\
&= \Delta_{tr} H_{(1)} + \int_{T_1}^{T_2} \Delta(C_{p,m})dT
\end{aligned}
$$

$$
\Delta_{tr} S_{(2)} = \Delta_{tr} S_{(1)} + \int_{T_1}^{T_2} [\Delta(C_{p,m})/T]dT
$$

对于生发，$T_1 \sim T_2$ 改变不太大，$\Delta(C_{p,m}) \approx$ 常数

### 纯物质的相图

对任意相，$\mu = f(p, T)$

(1) 单相区

(2) 两相平衡线 ($\mu_1 = \mu_2$)

(3) 三相点  ($\mu_1 = \mu_2 = \mu_3$)

(4) 临界与超临界 (气-液)

$$
\Delta E_{分子} = 0 = \Delta_{临界} H, \quad d_{气} = d_{液}, \quad \eta_{临界} = 0
$$

其中 $\eta$ 为黏度 (参考化工原理及实验 Chapter 1)

### 相区的相对位置

(1) 气态总是在凝聚态下方 (高压条件下凝聚态化学势更高)

(2) 固态总是在液态的左方

下面我们证明一下 (1):

在 ($T$, $p^*$) 点，

$$
\Delta_{tr} G = \mu_2 - \mu_1 = 0, \quad (\frac{\partial (\Delta_{tr} G)}{\partial p})_T < 0
$$

$$
dG_m = -S_m dT + V_m dp, (\frac{\partial (\Delta_{tr} G)}{\partial p})_T = \Delta_{tr} V_{m(气-凝)} < 0
$$

因此，给定 $T$，$p > p^*$，凝聚相稳定；$p < p^*$，气相稳定。

### 线的斜率

在相平衡线上，$\Delta_{tr} G_{平衡} = d\mu_1 - d\mu_2 = 0$

$$
\left\{
    \begin{aligned}
    d\mu_1 = -S_{m(1)}dT + V_{m(1)}dp \\
    d\mu_2 = -S_{m(2)}dT + V_{m(2)}dp \\
    \end{aligned}
\right.
$$

$$
\begin{aligned}
&-(S_{m(1)} - S_{m(2)})dT + (V_{m(1)} - V_{m(2)})dp = 0 \\
&-\Delta_{tr} S dT + \Delta_{tr} Vdp = 0
\end{aligned}
$$

$$
\therefore \frac{dp}{dT} = \frac{\Delta_{tr} S}{\Delta_{tr} V} = \frac{\Delta_{tr} H}{T_{tr}\Delta_{tr} V}
$$

上式称为克拉贝龙方程，对于相平衡体系成立。

(A) 气 $\to$ 凝

$$
\Delta_{tr} V_{气-凝} = -V_{m(气)} = -\frac{R T_{tr}}{p^*}
$$

$$
\frac{dp}{dT} = \frac{p^* |\Delta_{tr} H|}{R T_{tr}^2}
$$

上式称为克劳修斯-克拉贝龙方程。

(B) 固 $\to$ 液

$\Delta_{tr} S \to 比较大$，$\Delta_{tr} V \to 0^+$ (水特殊，$\Delta_{tr} V \to 0^-$)

$$
\frac{dp}{dT} = \frac{\Delta_{tr} S}{\Delta_{tr} V} \to \infty
$$

### 相交点

(A) 标准 b.p.

对 $150 \text{K} \sim 450 \text{K}$

$$
T_{b.p.} = \frac{E_{m, 分子/液}}{R - \Delta_{tr} S_{(b.p.)}} = \frac{E_{m, 分子/液}^{\circ}}{\frac{1 + F_{转}}{2} R - 84.5}
$$

$$
\therefore T_{b.p.} = -10.0 E_{m, 分子/液}^{\circ}
$$

对氢键分子，84.5 一项偏离。

(B) 固 $\to$ 液

$$
T_{m.p.} = \frac{E_{m, 分子/液} - E_{m, 分子/固}}{\Delta_{tr} S_{(类振动)} + \Delta_{tr} S_{(定向)} + \Delta_{tr} S_{(内振动)}}
$$

值得注意的是，不可能存在大范围规律。

- 对单原子/近球对称分子，分母只有第一项；

- 对刚性多原子，分母有第一、第二项；

- 对柔性分子，分母三项均有。

### 凝聚态的化学势

相平衡条件下，

$$
\mu_{凝} = \mu_{气(饱和)} = \mu^{\circ} + RT \ln{p^*}
$$

## 液态的量子统计热力学

### 摩尔热能

$$
Q_{m(液)} = Q_{m(气)} + \frac{3 + F_{转}}{2}RT
$$

$$
C_{p, m(液)} \approx C_{V, m(液)} = C_{V, m(气)} + \frac{3 + F_{转}}{2}R
$$

### 定压摩尔热容

近似有：

$$
H_m = U_m + pV_m(\to 0) = U(0)_m + Q_m
$$

$$
C_{p, m} = C_{V, m} + \frac{V_m T \alpha_p^2}{\pi_T} \qquad \alpha_p = \frac{1}{V_m}(\frac{\partial V_m}{\partial T})_p \qquad \pi_T = -(\frac{\partial p}{\partial V_m})_T
$$

$$
\Longrightarrow d(\ln V_m) = \alpha_p dT - \pi_T dp
$$

因此有：

$$
C_{p, m(液)} = C_{V, m(气)} + \frac{3 + F_{转}}{2}R + \frac{V_m T \alpha_p^2}{\pi_T}
$$

考虑氢键：

以水为例，设氢键能级等距，能级差为 $\Delta \varepsilon$，第 $i$ 个能级表示有 $4-i$ 个氢键，简并度为 $g_i$，则有：

$$
\mathscr{f}_{氢键} = \sum_{i=0}^{4}{g_i e^{\frac{-i\Delta \varepsilon}{kT}}}
$$

由中子散射确定，$\overline{N}_{氢键} = 3.6$，则有：

$$
3.6 = \frac{\sum_{i=0}^{4}{(4-i)g_i e^{\frac{-i\Delta \varepsilon}{kT}}}}{\sum_{i=0}^{4}{g_i e^{\frac{-i\Delta \varepsilon}{kT}}}}
$$

解得：$\Delta \varepsilon = 5.3 \text{J/mol}$，$C_{V, m(氢键)} = 21.3 \text{J/(mol·K)}$

$$
C_{p, m(液)} = C_{V, m(气)} + C_{V, m(氢键)} + \frac{3 + F_{转}}{2}R + \frac{V_m T \alpha_p^2}{\pi_T}
$$

### 体积摩尔比热容

$$
\Gamma_V = \frac{C_{p, m}}{V_m} \qquad \Gamma_{V(气)} = \frac{1}{m} \Gamma_{V(液)}
$$

### 体积

$$
V_m = (\frac{\partial G_m}{\partial p})_{T, n} = 
$$

## 固体的量子统计热力学

### 摩尔热能、摩尔内能与爱因斯坦关系式

$$
U_{m(固)} = Q_{m(固)} + U(0)_{m(固)} = \sum_{j=1}^{3N_A}{Q_{m(j)}} + U(0)_{m(固)}
$$

$$
C_{V, m(固)} = (\frac{\partial U_{m(固)}}{\partial T})_{V, n} = \sum_{j=1}^{3N_A}{\frac{k (h \nu_j / k T)^2}{(e^{h \nu_j / 2 k T}-e^{- h \nu_j / 2 k T})^2}} = 3R (\frac{h \nu_j / k T}{e^{h \nu_j / 2 k T}-e^{- h \nu_j / 2 k T}})^2
$$

上式称为 **爱因斯坦方程** 。

### 定压摩尔热容

$$
C_{p, m(固)} = C_{V, m(固)} + (\frac{\partial U(0)_{m, 固}}{\partial T})_p = \sum_{j=1}^{3N_A}{\frac{k (h \nu_j / k T)^2}{(e^{h \nu_j / 2 k T}-e^{- h \nu_j / 2 k T})^2}} + \frac{V_m T \alpha_p^2}{\pi_T}
$$

#### 单原子固体

低频高温近似，对多数单原子金属和离子晶体成立，对力常数大的小原子误差大

#### 共价分子（或基团）

$$
C_{p, m(固)} = 3R (\frac{h \nu_j / k T}{e^{h \nu_j / 2 k T}-e^{- h \nu_j / 2 k T}})^2 + \sum_{j=1}^{3N_A}{\frac{k (h \nu_j / k T)^2}{(e^{h \nu_j / 2 k T}-e^{- h \nu_j / 2 k T})^2}} + (\frac{\partial U(0)_{m, 固}}{\partial T})_p
$$

### 摩尔熵

$$
T \to 0, \qquad S_m \to 0, \qquad S_{m(固)} = \int_0^T{\frac{C_{p, m(固)}}{T}}dT
$$