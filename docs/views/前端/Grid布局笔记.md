---
title: Grid布局笔记
date: 2020-04-27
tags: 
 - css
categories:
 - 前端
---

::: tip
Grid网格布局是一种十分强大的布局，结合flex弹性盒子布局将会非常香
:::

<!-- more -->
## 基础概念

- 容器和项目

  采用网格布局的区域，称为"容器"（container）。容器内部采用网格定位的子元素，称为"项目"（item）。

- 行和列

  容器里面的水平区域称为"行"（row），垂直区域称为"列"（column）。

- 单元格

  行和列的交叉区域，称为"单元格"（cell）。

  正常情况下，`n`行和`m`列会产生`n x m`个单元格。比如，3行3列会产生9个单元格。

- 网格线

  划分网格的线，称为"网格线"（grid line）。水平网格线划分出行，垂直网格线划分出列。

  正常情况下，`n`行有`n + 1`根水平网格线，`m`列有`m + 1`根垂直网格线，比如三行就有四根水平网格线。

## 容器属性

### display 

`display: grid` 指定一个容器采用网格布局。

```css
// 容器为块级元素
div {
  display: grid; 
}

// 容器为行内元素
div {
  display: inline-grid;  
}
```

### grid-template-columns 和grid-template-rows(重点)

`grid-template-columns`：定义每一列的列宽

`grid-template-rows`: 定义每一行的行高。

```css
// 绝对长度
.container {
  display: grid;
  grid-template-columns: 100px 100px 100px;
  grid-template-rows: 100px 100px 100px;
}

// 百分比
.container {
  display: grid;
  grid-template-columns: 33.33% 33.33% 33.33%;
  grid-template-rows: 33.33% 33.33% 33.33%;
}

//repeat函数
/** repeat函数，简化重复的值
 	第一个参数是重复的次数（例子是3），第二个参数是所要重复的值。
**/
.container {
  display: grid;
  grid-template-columns: repeat(3, 33.33%);
  grid-template-rows: repeat(3, 33.33%);
}

// auto-fill关键字
/** 单元格大小固定，容器大小不固定
	希望容纳尽可能多的单元格
	auto-fill关键字表示自动填充
	给定列宽，每行能容纳多少个交给auto-fill去安排
**/
.container {
  display: grid;
  grid-template-columns: repeat(auto-fill, 100px);
}

//fr 关键字
/**
	表示所占的份数
	1fr  1fr:  1/2  1/2
	1fr  2fr:  1/3  2/3
**/
.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
/**
	结合绝对长度
**/
.container {
  display: grid;
  grid-template-columns: 150px 1fr 2fr;
}
/**
	结合minmax()函数
	minmax()函数产生一个长度范围，表示长度就在这个范围之中。它接受两个参数，分别为最小值和最大值。
**/
.container {
  display: grid;
  grid-template-columns: 1fr 1fr minmax(100px, 1fr);
}

//auto 关键字
// 表示由浏览器自己决定长度
.container {
  display: grid;
  grid-template-columns: 100px auto 100px;
}

// 网格线的名称
// 网格布局允许同一根线有多个名字，比如[c4 last-line]。
.container {
  display: grid;
  grid-template-columns: [c1] 100px [c2] 100px [c3] auto [c4];
  grid-template-rows: [r1] 100px [r2] 100px [r3] auto [r4];
}

//常见布局实例
.wrapper {
  display: grid;
  grid-template-columns: 70% 30%;   //左右栏
}

.wrapper {
  display: grid;
  grid-template-columns: repeat(12, 1fr);  //传统的十二网格布局
}
```

### row-gap 、column-gap 和 gap

`row-gap`： 设置行与行的间隔（行间距）

`column-gap`：设置列与列的间隔（列间距）

```css
.container {
  row-gap: 20px;
  column-gap: 20px;
}
```

`gap`：`column-gap`和`row-gap`的合并简写形式

```css
.container {
  gap: 20px 20px;
}
```

> 如果`gap`省略了第二个值，浏览器认为第二个值等于第一个值

### grid-template-areas

网格布局允许指定"区域"（area），一个区域由单个或多个单元格组成。`grid-template-areas`属性用于定义区域。

```css
// 命名相同的为一个区域
.container {
  display: grid;
  grid-template-columns: 100px 100px 100px;
  grid-template-rows: 100px 100px 100px;
  grid-template-areas: "header header header"
                       "main main sidebar"
                       "footer footer footer";
}

// 如果某些区域不需要利用，则使用"点"（.）表示
.container {
  display: grid;
  grid-template-columns: 100px 100px 100px;
  grid-template-rows: 100px 100px 100px;
  grid-template-areas: 'a . c'
                       'd . f'
                       'g . i';
}
```

### grid-auto-flow

表示item的放置顺序。默认的放置顺序是"先行后列"，默认值是`row`。

也可以将它设成`column`，变成"先列后行"。

修改设置，设为`row dense`，表示"先行后列"，并且尽可能紧密填满，尽量不出现空格

#### justify-items 、 align-items 、 place-items

`justify-items`：设置单元格内容的水平位置（左中右）

`align-items`：设置单元格内容的垂直位置（上中下）

`place-items`属性是`align-items`属性和`justify-items`属性的合并简写形式

```css
.container {
  justify-items: start | end | center | stretch;
  align-items: start | end | center | stretch;
}
```

### justify-content、align-content、place-content

`justify-content`：整个内容区域在容器里面的水平位置（左中右）

`align-content`： 整个内容区域的垂直位置（上中下）

```css
.container {
  justify-content: start | end | center | stretch | space-around | space-between | space-evenly;
  align-content: start | end | center | stretch | space-around | space-between | space-evenly;  
}
```

`place-content`属性是`align-content`属性和`justify-content`属性的合并简写形式。

```css
place-content: <align-content> <justify-content>
```

> 如果省略第二个值，浏览器就会假定第二个值等于第一个值。

### grid-auto-columns、 grid-auto-rows 

有时候一些指定item的位置在现有的网格外部。这时，浏览器会自动生成多余的网格，以便放置项目。

`grid-auto-columns`属性和`grid-auto-rows`属性用来设置，浏览器自动创建的多余网格的列宽和行高。

它们的写法与`grid-template-columns`和`grid-template-rows`完全相同。如果不指定这两个属性，浏览器完全根据单元格内容的大小，决定新增网格的列宽和行高。

## 项目属性

### grid-column-start、 grid-column-end和grid-row-start 、 grid-row-end

- `grid-column-start`属性：左边框所在的垂直网格线
- `grid-column-end`属性：右边框所在的垂直网格线
- `grid-row-start`属性：上边框所在的水平网格线
- `grid-row-end`属性：下边框所在的水平网格线

```css
.item-1 {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 4;
}
```

除了指定为第几个网格线，还可以指定为网格线的名字。不常用。

```css
.item-1 {
  grid-column-start: header-start;
  grid-column-end: header-end;
}
```

`span`关键字，表示"跨越"，即左右边框（上下边框）之间跨越多少个网格。

```css
.item-1 {
  grid-column-start: span 2;
}
```

### grid-column、grid-row（常用）

`grid-column`属性是`grid-column-start`和`grid-column-end`的合并简写形式。

`grid-row`属性是`grid-row-start`属性和`grid-row-end`的合并简写形式。

```css
.item-1 {
  grid-column: 1 / 3;
  grid-row: 1 / 2;
}
/* 等同于 */
.item-1 {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
}

//也可以使用span关键字
.item-1 {
  grid-column: 1 / 3;
  grid-row: 1 / 3;
}
/* 等同于 */
.item-1 {
  grid-column: 1 / span 2;
  grid-row: 1 / span 2;
}
```

### grid-area

`grid-area`属性指定项目放在哪一个区域。

区域名是由容器属性grid-template-areas划分并命名出的。

```css
.item-1 {
  grid-area: e;
}
```

`grid-area`属性还可用作`grid-row-start`、`grid-column-start`、`grid-row-end`、`grid-column-end`的合并简写形式，直接指定项目的位置。

```css
.item {
  grid-area: <row-start> / <column-start> / <row-end> / <column-end>;
}

//例子
.item-1 {
  grid-area: 1 / 1 / 3 / 3;
}
```

### justify-self 、align-self 、place-self

`justify-self`属性设置单元格内容的水平位置（左中右），跟`justify-items`属性的用法完全一致，但只作用于单个项目。

`align-self`属性设置单元格内容的垂直位置（上中下），跟`align-items`属性的用法完全一致，也是只作用于单个项目。

```css
.item {
  justify-self: start | end | center | stretch;
  align-self: start | end | center | stretch;
}
```

`place-self`属性是`align-self`属性和`justify-self`属性的合并简写形式。

```css
place-self: <align-self> <justify-self>;
```

> 如果省略第二个值，`place-self`属性会认为这两个值相等。

## 总结

Grid布局常用套路：

容器定义布局方式为**网格布局**,按照项目需求去划分网格

- **划分格子**用如下几种常见方式

```css
// 1.划分格子用百分比 最常见
.container{
    display: grid;
    grid-template-columns: 30% 70%;
    
}
// 2.划分格子用占几份的方式  最常见
.container{
    display: grid;
    grid-template-columns: repeat(12,1fr)
    
}

// 3. 绝对长度结合自动
.container{
    display: grid;
    grid-template-columns: 200px auto 200px;
}

// 4.结对长度结合 占几份
.container{
    display: grid;
    grid-template-columns: 200px 2fr 1fr;
}

```

- **项目区域**的划分方式

```css
// 1.指定网格线开始和结束  常用
.item-1 {
  grid-column: 1 / 3;
  grid-row: 1 / 3;
}
// 也可以使用span关键字
.item-1 {
  grid-column: 1 / span 2;
  grid-row: 1 / span 2;
}
// 也可以直接用grid-area一次性分配好区域，可以说是grid-column和grid-row的结合体
.item-1 {
  grid-area: 1 / 1 / 3 / 3;
}

// 2.在容器中直接划分好区域并命名
.container {
  display: grid;
  grid-template-columns: 100px 100px 100px;
  grid-template-rows: 100px 100px 100px;
  grid-template-areas: "header header header"
                       "main main sidebar"
                       "footer footer footer";
}
// 项目中指定区域名
.item-1 {
  grid-area: header;
}
```

相关参考 :      [阮一峰  Grid 网格布局教程](http://www.ruanyifeng.com/blog/2019/03/grid-layout-tutorial.html)

