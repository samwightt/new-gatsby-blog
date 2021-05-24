import React from 'react'
import tinycolor from 'tinycolor2'
import styled, { th, useColor } from '@xstyled/emotion'

/**
 * Accepts in a color and a background color and calculates a WCAG-acceptable readable color
 * from the two.
 * @param color The foreground color.
 * @param backgroundColor The background color to test against.
 * @param size The size of the text.
 * @returns An accessible color.
 */
const getReadableColor = (
  color: string,
  backgroundColor: string,
  size: 'small' | 'large'
) => {
  const background = tinycolor(backgroundColor)
  let currentColor = tinycolor(color)
  while (
    !(tinycolor as any).isReadable(currentColor, background, {
      level: 'AA',
      size
    })
  ) {
    currentColor = currentColor.darken()
  }

  return currentColor.toString()
}

interface CreateUnderlineProps {
  color: string
  bottomOffset?: number
  underlineSize?: number
  lineHeight?: number
  size: 'small' | 'large'
}

/**
 * Wraps a given component with an accessible underline styling.
 *
 * Adds a gray underline under the component. This wraps across multiple lines if the
 * component displays inline.
 *
 * @param component The component to wrap.
 * @param props Properties that specify different options.
 * @returns A wrapped component.
 */
export function makeUnderline<T = unknown> (
  component: React.ComponentType<T>,
  props?: CreateUnderlineProps
) {
  return (x: T) => {
    const baseColor = th.color('gray-200')
    const themeColor = useColor(props?.color || 'gray-800')

    const fixedColor = getReadableColor(
      themeColor,
      'white',
      props?.size || 'small'
    )

    const underlineSize = props?.underlineSize
      ? th.size(props.underlineSize)
      : th.size(0.12)
    const lineHeight = props?.lineHeight
      ? th.lineHeight(props.lineHeight)
      : th.lineHeight(1.5)
    const paddingBottom = props?.bottomOffset
      ? th.space(props.bottomOffset)
      : th.space(1)

    const Main = styled(component)`
      text-decoration: none;
      padding-bottom: ${paddingBottom};
      background: linear-gradient(to right, ${baseColor}, ${baseColor}),
        linear-gradient(to right, ${fixedColor}, ${fixedColor});
      background-size: 100% ${underlineSize}, 0 ${underlineSize};
      line-height: ${lineHeight};
      background-position: 100% 100%, 0 100%;
      background-repeat: no-repeat;
      transition-property: background-size color;
      transition-duration: 300ms;
      transition-timing-function: ease-in-out;

      &:hover,
      &:focus {
        color: ${fixedColor};
        background-size: 0 ${underlineSize}, 100% ${underlineSize};
      }
    `

    return <Main {...x} />
  }
}
