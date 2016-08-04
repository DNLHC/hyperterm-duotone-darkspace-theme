
 const backgroundColor = '#24242e';
 const foregroundColor = '#767693';
 const borderColor = 'rgba(0, 0, 0, 0)';
 const cursorColor = '#ff8b52'; // opacity set in .termCSS: see under

const colors = [
  backgroundColor, //  black
  '#e05252', //  red
  '#43d08a', //  green
  '#e0c285', //  yellow
  '#6a574d', //  blue
  '#9d9dc8', //  magenta
  '#dd672c', //  cyan
  '#595969', //  white
  '#595969', //  lightBlack
  '#ebebff', //  lightRed
  '#595969', //  lightGreen
  '#9d9dc8', //  lightYellow
  '#fe8c52', //  lightBlue
  '#595969', //  lightMagenta
  '#ff8b52', //  lightCyan
  '#24242e'  //  lightWhite
]

  // '#ebebff', //  red
  // '#9d9dc8', //  green
  // '#6a574d', //  yellow
  // '#ebebff', //  blue

exports.decorateConfig = config => {
  return Object.assign({}, config, {
    backgroundColor,
    foregroundColor,
    cursorColor: cursorColor,
    borderColor: borderColor,
    colors: colors,
    termCSS: `
      ${config.termCSS || ''}
      .cursor-node[focus="true"] {
         opacity: .8 !important;
       }
      .cursor-node {
        margin-left: 7px !important;
        background-color: transparent !important;
        border-bottom-style: solid !important;
      }
    `,
    css: `
      ${config.css || ''}
      .header_header {
        top: 0;
        right: 0;
        left: 0;
      }
      .first_gius0z {
        margin-left: 0 !important;
      }
      .nav_1nk0jz0 {
        font-size: 13px !important;
        font-family: "Product Sans", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
      }
      
      .tab_first {
        margin-left: 0 !important;
      }
      .tabs_list {
        background-color: #24242e !important;
        border: none !important;
      }
      .tab_tab {
        color: #767693 !important;
      }
      .tab_tab.tab_active {
        font-weight: 500;
        letter-spacing: .5px;
        background-color: #24242e;
        border-color: rgba(0, 0, 0, 0) !important;
        box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.06);
      }
      .tab_tab.tab_active::before {
        display: none;
        border-bottom-color: #24242e;
      }
      .tabs_title, .tab_icon, .tab_tab.tab_active {
        color: #ebebff !important;
      }
      .tab_tab.tab_hasActivity {
        color: #ff8b52 !important;
      }
      .tab_text {
        background-color: #2d2d39;
        border-left: 2px solid #24242e;
        box-shadow: inset 0px -1px 2px rgba(0,0,0,.075);
        transition: all .3s;
      }
      .tab_tab.tab_active .tab_text,
      .tab_tab:hover .tab_text {
        background-color: #24242e !important;
        box-shadow: none;
      }
      `
  })
}