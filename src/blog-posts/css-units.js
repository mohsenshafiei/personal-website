export default {
  title: 'CSS Units',
  description: 'A complete source of CSS units',
  author: 'Mohsen Shafiei Tafreshi',
  time: '2 Minutes Reading',
  date: '1 July 2019',
  content: [
    `
    It is interesting to know we have two types of lengths in CSS. They are
    Absolute and Relative lengths. Let's review all of them together:
    `,
    `# Absolute Lengths`,
    `The absolute length units are fixed and a length expressed in any of these will appear as exactly that size.`,
    `Absolute length units are not recommended for use on screen, because screen sizes vary so much.
    However, they can be used if the output medium is known, such as for print layout.`,
    `th Unit * Description`,
    `td cm * centimeter`,
    `td mm * milimeter`,
    `td in * inches (1in = 96px = 2.54cm)`,
    `td px * pixels (1px = 1/96th of 1in)`,
    `td pt * points (1pt = 1/72 of 1in)`,
    `td pc * picas (1pc = 12 pt)`,
    `* Pixels (px) are relative to the viewing device. For low-dpi devices, 1px is one device pixel (dot) of the display.
    For printers and high resolution screens 1px implies multiple device pixels.`,
    `# Relative Lengths`,
    `Relative length units specify a length relative to another length property. Relative length units scale better between different rendering mediums.`,
    `th Unit * Description`,
    `td em * Relative to the font-size of the element (2em means 2 times the size of the current font)`,
    `td ex * Relative to the x-height of the current font (rarely used)`,
    `td ch * Relative to the width of the "0" (zero)`,
    `td rem * Relative to font-size of the root element`,
    `td vw * Relative to 1% of the width of the viewport*`,
    `td vh * Relative to 1% of the height of the viewport*`,
    `td vmin * Relative to 1% of viewport's* smaller dimension`,
    `td vmax * Relative to 1% of viewport's* larger dimension`,
    `td % * Relative to the parent element`,

  ],
  link: '',
};
