# 第十二章：表界面与胶体(2)——胶体溶液

## 胶体及其物理性质

### 胶体（分散系——溶液）

定义：一种相态以纳米尺度稳定分散在另一种物质的连续相中。

### 胶体纳米层的独特物理与化学性质

#### 半导体纳米晶（量子点）

对于半导体，存在两个能级，价带(VB)和导带(CB)，带隙为 $E_g$

对于小尺寸半导体，有：

$$
E_g(r) = E_g + E_{ex} +\frac{h^2}{8r^2}\frac{1}{m_{ex}} \qquad \frac{1}{m_{ex}} = \frac{1}{m_e} + \frac{1}{m_n}
$$

#### 金属纳米晶

对于金属纳米晶，带隙为 0，电子可以自由流动。

出现表面等离子体振动，例如金溶胶有 520nm 的最大吸收，小尺度下呈酒红色。

#### 磁性纳米晶

一般的铁磁体里面有不同磁畴向不同方向摆放，铁磁体对磁场的反应形成磁滞回线。

对于单畴磁体，其半径一般是几纳米到几十纳米，磁化率随外场方向和强度的改编完全可逆，不存在磁滞回线。

#### 化学性质

- 表面催化：完美单晶催化位点少，制成纳米颗粒负载在表面上能够大幅增加催化效率

- 热力学性质：尺寸变小，熔点变小

## 单个纳米晶的热力学性质

### 溶液中单个纳米晶的热力学性质

设溶液中某纳米晶半径为 $r$，其与溶液中单体之间有亚稳态：

$$
\mu_{r} = \mu_{单体}
$$

$$
\mu_{r} = \left( \frac{\partial G}{\partial n} \right)_{T,p} = \left( \frac{\partial (n\mu_{\infty}+A\sigma)}{\partial n} \right)_{T,p} = \mu_{\infty} + \left( \frac{\partial (A\sigma)}{\partial n} \right)_{T,p}
$$

$$
n=\frac{4 \pi r^3}{3 V_m} \Rightarrow \left(\frac{\partial n}{\partial r}\right)_{T,p} = \frac{4\pi r^2}{V_m}
$$

$$
\Rightarrow \sigma \left( \frac{\partial A}{\partial n} \right)_{T,p} = \sigma \left( \frac{\partial A}{\partial r} \right)_{T,p} \left( \frac{\partial r}{\partial n} \right)_{T,p} = \sigma 8\pi r \frac{V_m}{4 \pi r^2} = \frac{2 \sigma V_m}{r}
$$

$$
A \left( \frac{\partial \sigma}{\partial n} \right)_{T,p} = A \left( \frac{\partial \sigma}{\partial r} \right)_{T,p} \left( \frac{\partial r}{\partial n} \right)_{T,p} = 4 \pi r^2 \left( \frac{\partial \sigma}{\partial r} \right)_{T,p} \frac{V_m}{4 \pi r^2} = V_m \left( \frac{\partial \sigma}{\partial r} \right)_{T,p}
$$

$$
\Rightarrow \mu_r = \mu_{\infty} + \frac{2 \sigma V_m}{r} + V_m \left( \frac{\partial \sigma}{\partial r} \right)_{T,p}
$$

$$
\left\{
    \begin{aligned}
        \mu_{\infty,饱和} = \mu^* + RT\ln \alpha_{\infty,饱和} \\
        \mu_{r,饱和} = \mu^* + RT\ln \alpha_{r,饱和} \\
    \end{aligned}
\right.
\Rightarrow \alpha_{r,饱和} = \alpha_{\infty,饱和} \exp{\left[\left(\frac{2\sigma V_m}{rRT}\right)\cdot\left(\frac{V_m}{RT}\left( \frac{\partial \sigma}{\partial r} \right)_{T,p}\right)\right]}
$$

若 $\left( \frac{\partial \sigma}{\partial r} \right)_{T,p} \approx 0$，有简化式：

$$
\alpha_{r,饱和} = \alpha_{\infty,饱和} \exp{(\frac{2\sigma V_m}{rRT})}
$$

若 $r\to0,\ \alpha_{r,饱和}\to\infty$，

$$
0 \ne \left( \frac{\partial \sigma}{\partial r} \right)_{T,p} < 0
$$

### 气相中的小液滴

$$
\left\{
    \begin{aligned}
        \mu_{\infty,饱和} = \mu^\circ + RT\ln p_{\infty}^* \\
        \mu_{r,饱和} = \mu^\circ + RT\ln p_{r}^* \\
    \end{aligned}
\right.
\Rightarrow p_{r}^* = p_{\infty}^* \exp{\left[\left(\frac{2\sigma V_m}{rRT}\right)\cdot\left(\frac{V_m}{RT}\left( \frac{\partial \sigma}{\partial r} \right)_{T,p}\right)\right]}
$$

### 溶液中的纳米晶的溶解度

回忆第九章，$\alpha_{\infty}=1$

$$
\chi_{r,饱和} = \frac{1}{\gamma_{r,饱和}} \exp{\left[\left(\frac{2\sigma V_m}{rRT}\right)\cdot\left(\frac{V_m}{RT}\left( \frac{\partial \sigma}{\partial r} \right)_{T,p}\right)\right]}
$$

吉布斯、开尔文、奥斯瓦尔德：

$$
\chi_{r,饱和} = \exp{\left(\frac{2\sigma V_m}{rRT}\right)}
$$

### 成核理论

溶液中单体的化学势大于无穷大体相的化学势，

$$
\Delta G = \mu_r - \mu_{单体} = (\mu_{\infty} - \mu_{单体})\frac{4 \pi r^3}{3 V_m} + 4 \pi r^2 \sigma
$$

## 分散系的热力学性质

### 聚集自发性

由于表面势影响，粒子会自发聚集成大颗粒

### 电解质溶液中的胶体粒子

### 纳米晶-配体络合物