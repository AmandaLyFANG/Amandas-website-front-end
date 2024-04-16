/**
 * 判断元素是否在可视区域内
 * @param dom 需要判断的 节点的ref
 * @returns boolean
 */
export const isContain = (dom) => {
  // 视口高度
  const totalHeight =
    window.innerHeight || document.documentElement.clientHeight
  const totalWidth = window.innerWidth || document.documentElement.clientWidth

  // 当滚动条滚动时，top, left, bottom, right时刻会发生改变。
  const { top, right, bottom, left } = dom?.getBoundingClientRect?.() ?? {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  }

  // 元素 上下左右边 是否在视图内
  const viewLeft = left >= 0
  const viewTop = top >= 0
  const viewBottom = bottom <= totalHeight
  const viewRight = right <= totalWidth

  return (
    (viewLeft && viewTop && top <= totalHeight && left <= totalWidth) ||
    (viewBottom && viewRight && bottom > 0) ||
    (!viewTop && !viewBottom && ((!viewLeft && !viewRight) || viewLeft))
  )
}
