const screenConfig = {
  code: 'screen',
  type: 'screen',
  label: '大屏设置',
  icon: '',
  options: {
    setup: [
      {
        type: 'el-input-number',
        label: '大屏宽度',
        name: 'width',
        required: false,
        placeholder: 'px',
        value: '1920',
      },
      {
        type: 'el-input-number',
        label: '大屏高度',
        name: 'height',
        required: false,
        placeholder: 'px',
        value: '1080',
      },
      {
        type: 'el-input-text',
        label: '标题',
        name: 'title',
        require: false,
        placeholder: '',
        value: '大屏',
      },
      {
        type: 'el-input-textarea',
        label: '大屏简介',
        name: 'description',
        required: false,
        placeholder: '',
      },
      {
        type: 'vue-color',
        label: '背景颜色',
        name: 'backgroundColor',
        required: false,
        placeholder: '',
        value: '#000',
      },
      {
        type: 'custom-upload',
        label: '图片地址',
        name: 'backgroundImage',
        required: false,
        placeholder: '',
        value: 'https://report.anji-plus.com/file/download/bf566e48-ccad-40e1-8ee9-228427e5466b',
      },
    ],
    data: [],
    position: [],
  },
}

const widgetTools = [
  // type=html类型的组件
  {
    code: 'widget-text',
    type: 'html',
    label: '文本',
    icon: 'iconziyuan',
    options: {
      // 配置
      setup: [
        {
          type: 'el-input-text',
          label: '图层名称',
          name: 'layerName',
          required: false,
          placeholder: '',
          value: '文本框',
        },
        {
          type: 'el-input-text',
          label: '文本内容',
          name: 'text',
          required: false,
          placeholder: '',
          value: '文本框',
        },
        {
          type: 'el-input-number',
          label: '字体大小',
          name: 'fontSize',
          required: false,
          placeholder: '',
          value: '26',
        },
        {
          type: 'vue-color',
          label: '字体颜色',
          name: 'color',
          required: false,
          placeholder: '',
          value: '#FAD400',
        },
        {
          type: 'el-input-number',
          label: '字体间距',
          name: 'letterSpacing',
          required: false,
          placeholder: '',
          value: '0',
        },
        {
          type: 'vue-color',
          label: '字体背景',
          name: 'background',
          required: false,
          placeholder: '',
          value: 'rgba(115,170,229,.0)',
        },
        {
          type: 'el-select',
          label: '文字粗细',
          name: 'fontWeight',
          required: false,
          placeholder: '',
          selectOptions: [
            {code: 'normal', name: '正常'},
            {code: 'bold', name: '粗体'},
            {code: 'bolder', name: '特粗体'},
            {code: 'lighter', name: '细体'}
          ],
          value: 'normal'
        },
        {
          type: 'el-select',
          label: '对齐方式',
          name: 'textAlign',
          required: false,
          placeholder: '',
          selectOptions: [
            {code: 'center', name: '居中'},
            {code: 'left', name: '左对齐'},
            {code: 'right', name: '右对齐'},
          ],
          value: 'center'
        },
      ],
      // 数据
      data: [
        {
          type: 'el-radio-group',
          label: '数据类型',
          name: 'dataType',
          require: false,
          placeholder: '',
          selectValue: true,
          selectOptions: [
            {
              code: 'staticData',
              name: '静态数据',
            },
            {
              code: 'dynamicData',
              name: '动态数据',
            },
          ],
          value: 'staticData',
        },
        {
          type: 'el-input-number',
          label: '刷新时间(毫秒)',
          name: 'refreshTime',
          relactiveDom: 'dataType',
          relactiveDomValue: 'dynamicData',
          value: 5000
        },
        {
          type: 'el-button',
          label: '静态数据',
          name: 'staticData',
          required: false,
          placeholder: 'px',
          relactiveDom: 'dataType',
          relactiveDomValue: 'staticData',
          value: '文本框',
        },
        {
          type: 'dycustComponents',
          label: '',
          name: 'dynamicData',
          required: false,
          placeholder: 'px',
          relactiveDom: 'dataType',
          relactiveDomValue: 'dynamicData',
          chartType: 'widget-text',
          value: '',
        }
      ],

      // 坐标
      position: [
        {
          type: 'el-input-number',
          label: '左边距',
          name: 'left',
          required: false,
          placeholder: 'px',
          value: 0,
        },
        {
          type: 'el-input-number',
          label: '上边距',
          name: 'top',
          required: false,
          placeholder: 'px',
          value: 0,
        },
        {
          type: 'el-input-number',
          label: '宽度',
          name: 'width',
          required: false,
          placeholder: '该容器在1920px大屏中的宽度',
          value: 100,
        },
        {
          type: 'el-input-number',
          label: '高度',
          name: 'height',
          required: false,
          placeholder: '该容器在1080px大屏中的高度',
          value: 40
        },
      ],
    },
  },
  {
    code: 'widget-marquee',
    type: 'html',
    label: '滚动文本',
    icon: 'iconhengxiangwenzi',
    options: {
      // 配置
      setup: [
        {
          type: 'el-input-text',
          label: '图层名称',
          name: 'layerName',
          required: false,
          placeholder: '',
          value: '跑马灯',
        },
        {
          type: 'el-input-text',
          label: '文本内容',
          name: 'text',
          required: false,
          placeholder: '',
          value: '滚动文本',
        },
        {
          type: 'el-input-number',
          label: '字体大小',
          name: 'fontSize',
          required: false,
          placeholder: '',
          value: '26',
        },
        {
          type: 'vue-color',
          label: '字体颜色',
          name: 'color',
          required: false,
          placeholder: '',
          value: '#FAD400',
        },
        {
          type: 'el-input-number',
          label: '字体间距',
          name: 'letterSpacing',
          required: false,
          placeholder: '',
          value: '0',
        },
        {
          type: 'vue-color',
          label: '字体背景',
          name: 'background',
          required: false,
          placeholder: '',
          value: 'rgba(115,170,229,.5)',
        },
        {
          type: 'el-select',
          label: '文字粗细',
          name: 'fontWeight',
          required: false,
          placeholder: '',
          selectOptions: [
            {code: 'normal', name: '正常'},
            {code: 'bold', name: '粗体'},
            {code: 'bolder', name: '特粗体'},
            {code: 'lighter', name: '细体'}
          ],
          value: 'normal'
        },
/*        {
          type: 'el-input-number',
          label: '滚动速度',
          name: 'jScrollPane',
          //required: false,
          placeholder: '',
          value: '50',
        }*/
      ],
      // 数据
      data: [
        {
          type: 'el-radio-group',
          label: '数据类型',
          name: 'dataType',
          require: false,
          placeholder: '',
          selectValue: true,
          selectOptions: [
            {
              code: 'staticData',
              name: '静态数据',
            },
            {
              code: 'dynamicData',
              name: '动态数据',
            },
          ],
          value: 'staticData',
        },
        {
          type: 'el-input-number',
          label: '刷新时间(毫秒)',
          name: 'refreshTime',
          relactiveDom: 'dataType',
          relactiveDomValue: 'dynamicData',
          value: 5000
        },
        {
          type: 'el-button',
          label: '静态数据',
          name: 'staticData',
          required: false,
          placeholder: 'px',
          relactiveDom: 'dataType',
          relactiveDomValue: 'staticData',
          value: '文本框',
        },
        {
          type: 'dycustComponents',
          label: '',
          name: 'dynamicData',
          required: false,
          placeholder: 'px',
          relactiveDom: 'dataType',
          relactiveDomValue: 'dynamicData',
          chartType: 'widget-text',
          value: '',
        }
      ],
      // 坐标
      position: [
        {
          type: 'el-input-number',
          label: '左边距',
          name: 'left',
          required: false,
          placeholder: 'px',
          value: 0,
        },
        {
          type: 'el-input-number',
          label: '上边距',
          name: 'top',
          required: false,
          placeholder: 'px',
          value: 0,
        },
        {
          type: 'el-input-number',
          label: '宽度',
          name: 'width',
          required: false,
          placeholder: '该容器在1920px大屏中的宽度',
          value: 100,
        },
        {
          type: 'el-input-number',
          label: '高度',
          name: 'height',
          required: false,
          placeholder: '该容器在1080px大屏中的高度',
          value: 40,
        },
      ],
    },
  },
  {
    code: 'widget-href',
    type: 'html',
    label: '超链接',
    icon: 'iconchaolianjie',
    options: {
      // 配置
      setup: [
        {
          type: 'el-input-text',
          label: '图层名称',
          name: 'layerName',
          required: false,
          placeholder: '',
          value: '超链接',
        },
        {
          type: 'el-input-text',
          label: '文本内容',
          name: 'text',
          required: false,
          placeholder: '',
          value: '超链接',
        },
        {
          type: 'el-input-number',
          label: '字体大小',
          name: 'fontSize',
          required: false,
          placeholder: '',
          value: '26',
        },
        {
          type: 'vue-color',
          label: '字体颜色',
          name: 'color',
          required: false,
          placeholder: '',
          value: '#FAD400',
        },
        {
          type: 'el-input-number',
          label: '字体间距',
          name: 'letterSpacing',
          required: false,
          placeholder: '',
          value: '0',
        },
        {
          type: 'vue-color',
          label: '字体背景',
          name: 'background',
          required: false,
          placeholder: '',
          value: 'rgba(115,170,229,.5)',
        },
        {
          type: 'el-select',
          label: '文字粗细',
          name: 'fontWeight',
          required: false,
          placeholder: '',
          selectOptions: [
            {code: 'normal', name: '正常'},
            {code: 'bold', name: '粗体'},
            {code: 'bolder', name: '特粗体'},
            {code: 'lighter', name: '细体'}
          ],
          value: 'normal'
        },
        {
          type: 'el-select',
          label: '对齐方式',
          name: 'textAlign',
          required: false,
          placeholder: '',
          selectOptions: [
            {code: 'center', name: '居中'},
            {code: 'left', name: '左对齐'},
            {code: 'right', name: '右对齐'},
          ],
          value: 'center'
        },
        {
          type: 'el-radio-group',
          label: '跳转方式',
          name: 'jumpMode',
          required: false,
          placeholder: '',
          selectOptions: [
            {
              code: 'self',
              name: '本窗口',
            },
            {
              code: 'other',
              name: '新窗口',
            },
          ],
          value: 'self',
        },
        {
          type: 'el-input-text',
          label: '超链地址',
          name: 'linkAdress',
          required: false,
          placeholder: '',
          value: 'http://www.baidu.com',
        },
      ],
      // 数据
      data: [],
      // 坐标
      position: [
        {
          type: 'el-input-number',
          label: '左边距',
          name: 'left',
          required: false,
          placeholder: 'px',
          value: 0,
        },
        {
          type: 'el-input-number',
          label: '上边距',
          name: 'top',
          required: false,
          placeholder: 'px',
          value: 0,
        },
        {
          type: 'el-input-number',
          label: '宽度',
          name: 'width',
          required: false,
          placeholder: '该容器在1920px大屏中的宽度',
          value: 100,
        },
        {
          type: 'el-input-number',
          label: '高度',
          name: 'height',
          required: false,
          placeholder: '该容器在1080px大屏中的高度',
          value: 40,
        },
      ],
    },
  },
  {
    code: 'widget-time',
    type: 'html',
    label: '当前时间',
    icon: 'iconshijian',
    options: {
      // 配置
      setup: [
        {
          type: 'el-input-text',
          label: '图层名称',
          name: 'layerName',
          required: false,
          placeholder: '',
          value: '当前时间',
        },
        {
          type: 'el-select',
          label: '时间格式',
          name: 'timeFormat',
          required: false,
          placeholder: '',
          selectOptions: [
            {code: 'yyyy-MM-dd', name: '日期'},
            {code: 'yyyy-MM-dd hh:mm', name: '日期+时分'},
            {code: 'yyyy-MM-dd hh:mm:ss', name: '日期+时分秒'},
            {code: 'MM-dd', name: '日期无年'},
            {code: 'hh:mm', name: '时分'},
            {code: 'hh:mm:ss', name: '时分秒'},
            {code: 'year-week', name: '日期+星期'},
            {code: 'year-h-m-week', name: '日期+时分+星期'},
            {code: 'year-h-m-s-week', name: '日期+时分秒+星期'},
            {code: 'week', name: '星期'}
          ],
          value: 'yyyy-MM-dd hh:mm:ss'
        },
        {
          type: 'el-input-number',
          label: '字体间距',
          name: 'letterSpacing',
          required: false,
          placeholder: '',
          value: '0'
        },
        {
          type: 'el-input-number',
          label: '字体大小',
          name: 'fontSize',
          required: false,
          placeholder: '',
          value: '26'
        },
        {
          type: 'vue-color',
          label: '字体颜色',
          name: 'color',
          required: false,
          placeholder: '',
          value: '#FAD400'
        },
        {
          type: 'vue-color',
          label: '字体背景',
          name: 'background',
          required: false,
          placeholder: '',
          value: 'rgba(115,170,229,.5)'
        },
        {
          type: 'el-select',
          label: '文字粗细',
          name: 'fontWeight',
          required: false,
          placeholder: '',
          selectOptions: [
            {code: 'normal', name: '正常'},
            {code: 'bold', name: '粗体'},
            {code: 'bolder', name: '特粗体'},
            {code: 'lighter', name: '细体'}
          ],
          value: 'normal'
        },
        {
          type: 'el-select',
          label: '对齐方式',
          name: 'textAlign',
          required: false,
          placeholder: '',
          selectOptions: [
            {code: 'center', name: '居中'},
            {code: 'left', name: '左对齐'},
            {code: 'right', name: '右对齐'},
          ],
          value: 'left'
        },
      ],
      // 数据
      data: [],
      // 坐标
      position: [
        {
          type: 'el-input-number',
          label: '左边距',
          name: 'left',
          required: false,
          placeholder: 'px',
          value: 0,
        },
        {
          type: 'el-input-number',
          label: '上边距',
          name: 'top',
          required: false,
          placeholder: 'px',
          value: 0,
        },
        {
          type: 'el-input-number',
          label: '宽度',
          name: 'width',
          required: false,
          placeholder: '该容器在1920px大屏中的宽度',
          value: 300,
        },
        {
          type: 'el-input-number',
          label: '高度',
          name: 'height',
          required: false,
          placeholder: '该容器在1080px大屏中的高度',
          value: 100,
        },
      ],
    },
  },
  {
    code: 'widget-image',
    type: 'html',
    label: '图片',
    icon: 'icontupian',
    options: {
      // 配置
      setup: [
        {
          type: 'el-input-text',
          label: '图层名称',
          name: 'layerName',
          required: false,
          placeholder: '',
          value: '图片',
        },
        {
          type: 'el-switch',
          label: '开启旋转',
          name: 'startRotate',
          required: false,
          placeholder: '',
          value: false,
        },
        {
          type: 'el-slider',
          label: '透明度',
          name: 'transparency',
          required: false,
          placeholder: '',
          value: 100
        },
        {
          type: 'el-input-number',
          label: '圆角',
          name: 'borderRadius',
          required: false,
          placeholder: '',
          value: '0'
        },
        {
          type: 'custom-upload',
          label: '图片地址',
          name: 'imageAdress',
          required: false,
          placeholder: '',
          value: 'http://10.108.26.197:9095/file/download/fd20d563-00aa-45e2-b5db-aff951f814ec',
        },
        {
          type: 'vue-color',
          label: '背景颜色',
          name: 'background',
          required: false,
          placeholder: '',
        },
      ],
      // 数据
      data: [],
      // 坐标
      position: [
        {
          type: 'el-input-number',
          label: '左边距',
          name: 'left',
          required: false,
          placeholder: 'px',
          value: 0,
        },
        {
          type: 'el-input-number',
          label: '上边距',
          name: 'top',
          required: false,
          placeholder: 'px',
          value: 0,
        },
        {
          type: 'el-input-number',
          label: '宽度',
          name: 'width',
          required: false,
          placeholder: '该容器在1920px大屏中的宽度',
          value: 300,
        },
        {
          type: 'el-input-number',
          label: '高度',
          name: 'height',
          required: false,
          placeholder: '该容器在1080px大屏中的高度',
          value: 200,
        },
      ],
    },
  },
  // {
  //   code: 'widget-slider',
  //   type: 'html',
  //   label: '轮播图片',
  //   icon: 'slider',
  //   options: {
  //     // 配置
  //     setup: [
  //       {
  //         type: 'el-input-text',
  //         label: '图层名称',
  //         name: 'layerName',
  //         required: false,
  //         placeholder: '',
  //       },
  //       {
  //         type: 'el-switch',
  //         label: '隐藏图层',
  //         name: 'hideLayer',
  //         required: false,
  //         placeholder: '',
  //       },
  //       {
  //         type: 'el-select',
  //         label: '轮播方向',
  //         name: 'tabDirection',
  //         required: false,
  //         placeholder: '',
  //       },
  //       {
  //         type: 'el-select',
  //         label: '选择器',
  //         name: 'tabSelector',
  //         required: false,
  //         placeholder: '',
  //       },
  //       {
  //         type: 'el-input-number',
  //         label: '轮播时间',
  //         name: 'tabTime',
  //         required: false,
  //         placeholder: '',
  //       },
  //     ],
  //     // 数据
  //     data: [],
  //     // 坐标
  //     position: [
  //       {
  //         type: 'el-input-number',
  //         label: '左边距',
  //         name: 'left',
  //         required: true,
  //         placeholder: 'px',
  //       },
  //       {
  //         type: 'el-input-number',
  //         label: '上边距',
  //         name: 'top',
  //         required: true,
  //         placeholder: 'px',
  //       },
  //       {
  //         type: 'el-input-number',
  //         label: '宽度',
  //         name: 'width',
  //         required: true,
  //         placeholder: '该容器在1920px大屏中的宽度',
  //       },
  //       {
  //         type: 'el-input-number',
  //         label: '高度',
  //         name: 'height',
  //         required: true,
  //         placeholder: '该容器在1080px大屏中的高度',
  //       },
  //     ],
  //   },
  // },
  {
    code: 'widget-video',
    type: 'html',
    label: '视频',
    icon: 'iconshipin',
    options: {
      // 配置
      setup: [
        {
          type: 'el-input-text',
          label: '图层名称',
          name: 'layerName',
          required: false,
          placeholder: '',
          value: 'video',
        },
        {
          type: 'el-input-text',
          label: '地址',
          name: 'videoAdress',
          required: false,
          placeholder: '',
          value: 'https://www.w3school.com.cn//i/movie.ogg',
        },
      ],
      // 数据
      data: [],
      // 坐标
      position: [
        {
          type: 'el-input-number',
          label: '左边距',
          name: 'left',
          required: false,
          placeholder: 'px',
          value: 0,
        },
        {
          type: 'el-input-number',
          label: '上边距',
          name: 'top',
          required: false,
          placeholder: 'px',
          value: 0,
        },
        {
          type: 'el-input-number',
          label: '宽度',
          name: 'width',
          required: false,
          placeholder: '该容器在1920px大屏中的宽度',
          value: 300,
        },
        {
          type: 'el-input-number',
          label: '高度',
          name: 'height',
          required: false,
          placeholder: '该容器在1080px大屏中的高度',
          value: 200,
        },
      ],
    },
  },
  {
    code: 'widget-table',
    type: 'html',
    label: '表格',
    icon: 'iconbiaoge',
    options: {
      setup: [
        {
          type: 'el-input-text',
          label: '图层名称',
          name: 'layerName',
          required: false,
          placeholder: '',
          value: '表格',
        },
        {
          type: 'el-select',
          label: '字体位置',
          name: 'textAlign',
          required: false,
          placeholder: '',
          selectOptions: [
            {code: 'center', name: '居中'},
            {code: 'left', name: '左对齐'},
            {code: 'right', name: '右对齐'},
          ],
          value: 'center'
        },
        {
          type: 'el-input-number',
          label: '字体大小',
          name: 'fontSize',
          required: false,
          placeholder: '',
          value: '16'
        },
        {
          type: 'el-switch',
          label: '开启滚动',
          name: 'isRoll',
          required: false,
          placeholder: '',
          value: true
        },
        {
          type: 'el-input-number',
          label: '滚动时间(毫秒)',
          name: 'rollTime',
          required: false,
          placeholder: '',
          value: 1000
        },
        {
          type: 'el-input-number',
          label: '滚动个数',
          name: 'rollNumber',
          required: false,
          placeholder: '',
          value: 1
        },
        {
          type: 'el-switch',
          label: '线条',
          name: 'isLine',
          required: false,
          placeholder: '',
          value: false
        },
        {
          type: 'el-input-number',
          label: '边框宽度',
          name: 'borderWidth',
          required: false,
          placeholder: '',
          value: 1
        },
        {
          type: 'vue-color',
          label: '边框颜色',
          name: 'borderColor',
          required: false,
          placeholder: '',
          value: '#fff'
        },
        [
          {
            name: '表头设置',
            list: [
              {
                type: 'el-switch',
                label: '表头显隐',
                name: 'isHeader',
                required: false,
                placeholder: '',
                value: true,
              },
              {
                type: 'vue-color',
                label: '表头颜色',
                name: 'headColor',
                require: false,
                placeholder: '',
                value: '#fff',
              },
              {
                type: 'vue-color',
                label: '表头背景',
                name: 'headBackColor',
                require: false,
                placeholder: '',
                value: '#0a73ff',
              },
            ],
          },
          {
            name: '表体设置',
            list: [
              {
                type: 'vue-color',
                label: '文字颜色',
                name: 'bodyColor',
                required: false,
                placeholder: '',
                value: '#fff',
              },
              {
                type: 'vue-color',
                label: '表格背景',
                name: 'tableBgColor',
                require: false,
                placeholder: '',
                value: '',
              },
              {
                type: 'vue-color',
                label: '奇行颜色',
                name: 'oldColor',
                require: false,
                placeholder: '',
                value: '#0a2732',
              },
              {
                type: 'vue-color',
                label: '偶行颜色',
                name: 'eventColor',
                required: false,
                placeholder: '',
                value: '#003b51'
              }
            ],
          },
        ],
        {
          type: 'dynamic-add-table',
          label: '',
          name: 'dynamicAddTable',
          required: false,
          placeholder: '',
          value: [{name: '日期', key: 'date', width: 200}, {name: '姓名', key: 'name', width: 200}, {
            name: '地址',
            key: 'address',
            width: '200'
          }]
        }
      ],
      data: [
        {
          type: 'el-radio-group',
          label: '数据类型',
          name: 'dataType',
          require: false,
          placeholder: '',
          selectValue: true,
          selectOptions: [
            {
              code: 'staticData',
              name: '静态数据',
            },
            {
              code: 'dynamicData',
              name: '动态数据',
            },
          ],
          value: 'staticData',
        },
        {
          type: 'el-input-number',
          label: '刷新时间(毫秒)',
          name: 'refreshTime',
          relactiveDom: 'dataType',
          relactiveDomValue: 'dynamicData',
          value: 5000
        },
        {
          type: 'el-button',
          label: '静态数据',
          name: 'staticData',
          required: false,
          placeholder: 'px',
          relactiveDom: 'dataType',
          relactiveDomValue: 'staticData',
          value: [
            {date: '2016-05-02', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄'},
            {date: '2016-05-02', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄'},
            {date: '2016-05-02', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄'},
            {date: '2016-05-02', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄'},
            {date: '2016-05-02', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄'},
            {date: '2016-05-02', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄'},
            {date: '2016-05-02', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄'},
          ],
        },
        {
          type: 'dycustComponents',
          label: '',
          name: 'dynamicData',
          required: false,
          placeholder: 'px',
          relactiveDom: 'dataType',
          relactiveDomValue: 'dynamicData',
          chartType: 'widget-table',
          value: '',
        },
      ],
      position: [
        {
          type: 'el-input-number',
          label: '左边距',
          name: 'left',
          required: false,
          placeholder: 'px',
          value: 0,
        },
        {
          type: 'el-input-number',
          label: '上边距',
          name: 'top',
          required: false,
          placeholder: 'px',
          value: 0,
        },
        {
          type: 'el-input-number',
          label: '宽度',
          name: 'width',
          required: false,
          placeholder: '该容器在1920px大屏中的宽度',
          value: 600,
        },
        {
          type: 'el-input-number',
          label: '高度',
          name: 'height',
          required: false,
          placeholder: '该容器在1080px大屏中的高度',
          value: 300,
        },
      ]
    }
  },
  {
    code: 'widget-iframe',
    type: 'html',
    label: '内联框架',
    icon: 'iconkuangjia',
    options: {
      // 配置
      setup: [
        {
          type: 'el-input-text',
          label: '图层名称',
          name: 'layerName',
          required: false,
          placeholder: '',
          value: 'iframe',
        },
        {
          type: 'el-input-text',
          label: '地址',
          name: 'iframeAdress',
          required: false,
          placeholder: '',
          value: 'https://report.anji-plus.com/index.html',
        },
      ],
      // 数据
      data: [],
      // 坐标
      position: [
        {
          type: 'el-input-number',
          label: '左边距',
          name: 'left',
          required: false,
          placeholder: 'px',
          value: 0,
        },
        {
          type: 'el-input-number',
          label: '上边距',
          name: 'top',
          required: false,
          placeholder: 'px',
          value: 0,
        },
        {
          type: 'el-input-number',
          label: '宽度',
          name: 'width',
          required: false,
          placeholder: '该容器在1920px大屏中的宽度',
          value: 300,
        },
        {
          type: 'el-input-number',
          label: '高度',
          name: 'height',
          required: false,
          placeholder: '该容器在1080px大屏中的高度',
          value: 200,
        },
      ],
    },
  },
  // {
  //   code: 'widget-universal',
  //   type: 'html',
  //   label: '全能组件',
  //   icon: 'univresal',
  // },
  // type=chart类型的组件
  {
    code: 'widget-barchart',
    type: 'chart',
    label: '柱形图',
    icon: 'iconzhuzhuangtu',
    options: {
      // 配置
      setup: [
        {
          type: 'el-input-text',
          label: '图层名称',
          name: 'layerName',
          required: false,
          placeholder: '',
          value: '柱状图',
        },
        {
          type: 'el-switch',
          label: '竖展示',
          name: 'verticalShow',
          required: false,
          placeholder: '',
          value: false,
        },
        {
          type: 'vue-color',
          label: '背景颜色',
          name: 'background',
          required: false,
          placeholder: '',
          value: ''
        },
        [
          {
            name: '柱体设置',
            list: [
              {
                type: 'el-slider',
                label: '最大宽度',
                name: 'maxWidth',
                required: false,
                placeholder: '',
                value: 10,
              },
              {
                type: 'el-slider',
                label: '圆角',
                name: 'radius',
                require: false,
                placeholder: '',
                value: 5,
              },
              {
                type: 'el-slider',
                label: '最小高度',
                name: 'minHeight',
                require: false,
                placeholder: '',
                value: 0,
              },
            ],
          },
          {
            name: '标题设置',
            list: [
              {
                type: 'el-switch',
                label: '标题',
                name: 'isNoTitle',
                required: false,
                placeholder: '',
                value: true,
              },
              {
                type: 'el-input-text',
                label: '标题',
                name: 'titleText',
                required: false,
                placeholder: '',
                value: '',
              },
              {
                type: 'vue-color',
                label: '字体颜色',
                name: 'textColor',
                required: false,
                placeholder: '',
                value: '#FFD700'
              },
              {
                type: 'el-select',
                label: '字体粗细',
                name: 'textFontWeight',
                required: false,
                placeholder: '',
                selectOptions: [
                  {code: 'normal', name: '正常'},
                  {code: 'bold', name: '粗体'},
                  {code: 'bolder', name: '特粗体'},
                  {code: 'lighter', name: '细体'}
                ],
                value: 'normal'
              },
              {
                type: 'el-input-number',
                label: '字体大小',
                name: 'textFontSize',
                required: false,
                placeholder: '',
                value: 20
              },
              {
                type: 'el-select',
                label: '字体位置',
                name: 'textAlign',
                required: false,
                placeholder: '',
                selectOptions: [
                  {code: 'center', name: '居中'},
                  {code: 'left', name: '左对齐'},
                  {code: 'right', name: '右对齐'},
                ],
                value: 'center'
              },
              {
                type: 'el-input-text',
                label: '副标题',
                name: 'subText',
                required: false,
                placeholder: '',
                value: ''
              },
              {
                type: 'vue-color',
                label: '字体颜色',
                name: 'subTextColor',
                required: false,
                placeholder: '',
                value: 'rgba(30, 144, 255, 1)'
              },
              {
                type: 'el-input-text',
                label: '字体粗细',
                name: 'subTextFontWeight',
                required: false,
                placeholder: '',
                selectOptions: [
                  {code: 'normal', name: '正常'},
                  {code: 'bold', name: '粗体'},
                  {code: 'bolder', name: '特粗体'},
                  {code: 'lighter', name: '细体'}
                ],
                value: 'normal'
              },
              {
                type: 'el-input-number',
                label: '字体大小',
                name: 'subTextFontSize',
                required: false,
                placeholder: '',
                value: 20
              },
            ],
          },
          {
            name: 'X轴设置',
            list: [
              {
                type: 'el-input-text',
                label: '名称',
                name: 'xName',
                required: false,
                placeholder: '',
                value: ''
              },
              {
                type: 'el-switch',
                label: '显示',
                name: 'hideX',
                required: false,
                placeholder: '',
                value: true,
              },
              {
                type: 'vue-color',
                label: '坐标名颜色',
                name: 'xNameColor',
                required: false,
                placeholder: '',
                value: '#fff'
              },
              {
                type: 'el-input-number',
                label: '字体大小',
                name: 'xNameFontSize',
                required: false,
                placeholder: '',
                value: 12
              },
              {
                type: 'el-slider',
                label: '文字角度',
                name: 'textAngle',
                required: false,
                placeholder: '',
                value: 0
              },
              {
                type: 'el-input-number',
                label: '文字间隔',
                name: 'textInterval',
                required: false,
                placeholder: '',
                value: ''
              },
              {
                type: 'el-switch',
                label: '轴反转',
                name: 'reversalX',
                required: false,
                placeholder: '',
                value: false
              },
              {
                type: 'vue-color',
                label: '颜色',
                name: 'Xcolor',
                required: false,
                placeholder: '',
                value: '#fff',
              },
              {
                type: 'el-input-number',
                label: '字号',
                name: 'fontSizeX',
                required: false,
                placeholder: '',
                value: 12,
              },
              {
                type: 'vue-color',
                label: '轴颜色',
                name: 'lineColorX',
                required: false,
                placeholder: '',
                value: '#fff',
              },
              {
                type: 'el-switch',
                label: '分割线显示',
                name: 'isShowSplitLineX',
                require: false,
                placeholder: '',
                value: false,
              },
              {
                type: 'vue-color',
                label: '分割线颜色',
                name: 'splitLineColorX',
                required: false,
                placeholder: '',
                value: '#fff',

              }
            ],
          },
          {
            name: 'Y轴设置',
            list: [
              {
                type: 'el-input-text',
                label: '名称',
                name: 'textNameY',
                require: false,
                placeholder: '',
                value: ''
              },
              {
                type: 'el-switch',
                label: '显示',
                name: 'isShowY',
                require: false,
                placeholder: '',
                value: true,
              },
              {
                type: 'vue-color',
                label: '坐标名颜色',
                name: 'NameColorY',
                required: false,
                placeholder: '',
                value: '#fff',
              },
              {
                type: 'el-input-number',
                label: '字体大小',
                name: 'NameFontSizeY',
                required: false,
                placeholder: '',
                value: 12,
              },
              {
                type: 'el-switch',
                label: '轴反转',
                name: 'reversalY',
                required: false,
                placeholder: '',
                value: false
              },
              {
                type: 'vue-color',
                label: '颜色',
                name: 'colorY',
                required: false,
                placeholder: '',
                value: '#fff',
              },
              {
                type: 'el-input-number',
                label: '字号',
                name: 'fontSizeY',
                required: false,
                placeholder: '',
                value: 12,
              },
              {
                type: 'vue-color',
                label: '轴颜色',
                name: 'lineColorY',
                required: false,
                placeholder: '',
                value: '#fff',
              }, {
                type: 'el-switch',
                label: '分割线显示',
                name: 'isShowSplitLineY',
                require: false,
                placeholder: '',
                value: false,
              }, {
                type: 'vue-color',
                label: '分割线颜色',
                name: 'splitLineColorY',
                required: false,
                placeholder: '',
                value: '#fff',

              }
            ],
          },
          {
            name: '数值设定',
            list: [
              {
                type: 'el-switch',
                label: '显示',
                name: 'isShow',
                required: false,
                placeholder: '',
                value: false
              },
              {
                type: 'el-input-number',
                label: '字体大小',
                name: 'fontSize',
                required: false,
                placeholder: '',
                value: 14
              },
              {
                type: 'vue-color',
                label: '字体颜色',
                name: 'subTextColor',
                required: false,
                placeholder: '',
                value: '#fff'
              },
              {
                type: 'el-select',
                label: '字体粗细',
                name: 'fontWeight',
                required: false,
                placeholder: '',
                selectOptions: [
                  {code: 'normal', name: '正常'},
                  {code: 'bold', name: '粗体'},
                  {code: 'bolder', name: '特粗体'},
                  {code: 'lighter', name: '细体'}
                ],
                value: 'normal'
              },
            ],
          },
          {
            name: '提示语设置',
            list: [
              {
                type: 'el-input-number',
                label: '字体大小',
                name: 'fontSize',
                required: false,
                placeholder: '',
              },
              {
                type: 'vue-color',
                label: '字体颜色',
                name: 'lineColor',
                required: false,
                placeholder: '',
              },
            ],
          },
          {
            name: '坐标轴边距设置',
            list: [
              {
                type: 'el-slider',
                label: '左边距(像素)',
                name: 'marginLeft',
                required: false,
                placeholder: '',
                value: 10,
              }, {
                type: 'el-slider',
                label: '顶边距(像素)',
                name: 'marginTop',
                required: false,
                placeholder: '',
                value: 50,
              }, {
                type: 'el-slider',
                label: '右边距(像素)',
                name: 'marginRight',
                required: false,
                placeholder: '',
                value: 40,
              }, {
                type: 'el-slider',
                label: '底边距(像素)',
                name: 'marginBottom',
                required: false,
                placeholder: '',
                value: 10,
              },
            ],
          },
          {
            name: '图例操作',
            list: [
              {
                type: 'el-switch',
                label: '图例',
                name: 'isShowLegend',
                required: false,
                placeholder: '',
                value: true,
              },
              {
                type: 'vue-color',
                label: '字体颜色',
                name: 'lengedColor',
                required: false,
                placeholder: '',
                value: '#fff',
              },
              {
                type: 'el-input-number',
                label: '字体大小',
                name: 'lengedFontSize',
                required: false,
                placeholder: '',
                value: 16,
              },
              {
                type: 'el-input-number',
                label: '图例宽度',
                name: 'lengedWidth',
                required: false,
                placeholder: '',
                value: 15,
              },
              {
                type: 'el-select',
                label: '横向位置',
                name: 'lateralPosition',
                required: false,
                placeholder: '',
                selectOptions: [
                  {code: 'left', name: '左对齐'},
                  {code: 'right', name: '右对齐'},
                ],
                value: ''
              },
              {
                type: 'el-select',
                label: '纵向位置',
                name: 'longitudinalPosition',
                required: false,
                placeholder: '',
                selectOptions: [
                  {code: 'top', name: '顶部'},
                  {code: 'bottom', name: '底部'},
                ],
                value: ''
              },
              {
                type: 'el-select',
                label: '布局前置',
                name: 'layoutFront',
                required: false,
                placeholder: '',
                selectOptions: [
                  {code: 'vertical', name: '竖排'},
                  {code: 'horizontal', name: '横排'},
                ],
                value: ''
              },
            ],
          },
          {
            name: '自定义配色',
            list: [
              {
                type: 'customColor',
                label: '',
                name: 'customColor',
                required: false,
                value: [{color: '#ff7f50'}, {color: '#87cefa'}, {color: '#da70d6'}, {color: '#32cd32'}, {color: '#6495ed'}],
              },
            ],
          },
        ],
      ],
      // 数据
      data: [
        {
          type: 'el-radio-group',
          label: '数据类型',
          name: 'dataType',
          require: false,
          placeholder: '',
          selectValue: true,
          selectOptions: [
            {
              code: 'staticData',
              name: '静态数据',
            },
            {
              code: 'dynamicData',
              name: '动态数据',
            },
          ],
          value: 'staticData',
        },
        {
          type: 'el-input-number',
          label: '刷新时间(毫秒)',
          name: 'refreshTime',
          relactiveDom: 'dataType',
          relactiveDomValue: 'dynamicData',
          value: 5000
        },
        {
          type: 'el-button',
          label: '静态数据',
          name: 'staticData',
          required: false,
          placeholder: 'px',
          relactiveDom: 'dataType',
          relactiveDomValue: 'staticData',
          value: '{"categories": ["苹果","三星","小米","oppo","vivo"],"series": [{"name": "手机品牌","data": [1000,2229,3879,2379,4079]}]}',
        },
        {
          type: 'dycustComponents',
          label: '',
          name: 'dynamicData',
          required: false,
          placeholder: 'px',
          relactiveDom: 'dataType',
          relactiveDomValue: 'dynamicData',
          chartType: 'widget-barchart',
          value: '',
        },
      ],
      // 坐标
      position: [
        {
          type: 'el-input-number',
          label: '左边距',
          name: 'left',
          required: false,
          placeholder: 'px',
          value: 0,
        },
        {
          type: 'el-input-number',
          label: '上边距',
          name: 'top',
          required: false,
          placeholder: 'px',
          value: 0,
        },
        {
          type: 'el-input-number',
          label: '宽度',
          name: 'width',
          required: false,
          placeholder: '该容器在1920px大屏中的宽度',
          value: 400,
        },
        {
          type: 'el-input-number',
          label: '高度',
          name: 'height',
          required: false,
          placeholder: '该容器在1080px大屏中的高度',
          value: 200,
        },
      ],
    },
  },
  {
    code: 'widget-gradient-color-barchart',
    type: 'chart',
    label: '柱形图-渐变色',
    icon: 'iconzhuzhuangtu',
    options: {
      // 配置
      setup: [
        {
          type: 'el-input-text',
          label: '图层名称',
          name: 'layerName',
          required: false,
          placeholder: '',
          value: '柱形图-渐变色',
        },
        {
          type: 'el-switch',
          label: '竖展示',
          name: 'verticalShow',
          required: false,
          placeholder: '',
          value: false,
        },
        {
          type: 'vue-color',
          label: '背景颜色',
          name: 'background',
          required: false,
          placeholder: '',
          value: ''
        },
        [
          {
            name: '柱体设置',
            list: [
              {
                type: 'el-slider',
                label: '最大宽度',
                name: 'maxWidth',
                required: false,
                placeholder: '',
                value: 10,
              },
              {
                type: 'el-slider',
                label: '圆角',
                name: 'radius',
                require: false,
                placeholder: '',
                value: 5,
              },
/*              {
                type: 'el-slider',
                label: '最小高度',
                name: 'minHeight',
                require: false,
                placeholder: '',
                value: 0,
              },*/
            ],
          },
          {
            name: '标题设置',
            list: [
              {
                type: 'el-switch',
                label: '标题',
                name: 'isNoTitle',
                required: false,
                placeholder: '',
                value: true,
              },
              {
                type: 'el-input-text',
                label: '标题',
                name: 'titleText',
                required: false,
                placeholder: '',
                value: '',
              },
              {
                type: 'vue-color',
                label: '字体颜色',
                name: 'textColor',
                required: false,
                placeholder: '',
                value: '#fff'
              },
              {
                type: 'el-select',
                label: '字体粗细',
                name: 'textFontWeight',
                required: false,
                placeholder: '',
                selectOptions: [
                  {code: 'normal', name: '正常'},
                  {code: 'bold', name: '粗体'},
                  {code: 'bolder', name: '特粗体'},
                  {code: 'lighter', name: '细体'}
                ],
                value: 'normal'
              },
              {
                type: 'el-input-number',
                label: '字体大小',
                name: 'textFontSize',
                required: false,
                placeholder: '',
                value: 22
              },
              {
                type: 'el-select',
                label: '字体位置',
                name: 'textAlign',
                required: false,
                placeholder: '',
                selectOptions: [
                  {code: 'center', name: '居中'},
                  {code: 'left', name: '左对齐'},
                  {code: 'right', name: '右对齐'},
                ],
                value: 'center'
              },
              {
                type: 'el-input-text',
                label: '副标题',
                name: 'subText',
                required: false,
                placeholder: '',
                value: ''
              },
              {
                type: 'vue-color',
                label: '字体颜色',
                name: 'subTextColor',
                required: false,
                placeholder: '',
                value: '#90979c'
              },
              {
                type: 'el-input-text',
                label: '字体粗细',
                name: 'subTextFontWeight',
                required: false,
                placeholder: '',
                selectOptions: [
                  {code: 'normal', name: '正常'},
                  {code: 'bold', name: '粗体'},
                  {code: 'bolder', name: '特粗体'},
                  {code: 'lighter', name: '细体'}
                ],
                value: 'normal'
              },
              {
                type: 'el-input-number',
                label: '字体大小',
                name: 'subTextFontSize',
                required: false,
                placeholder: '',
                value: 20
              },
            ],
          },
          {
            name: 'X轴设置',
            list: [
              {
                type: 'el-input-text',
                label: '名称',
                name: 'xName',
                required: false,
                placeholder: '',
                value: ''
              },
              {
                type: 'el-switch',
                label: '显示',
                name: 'hideX',
                required: false,
                placeholder: '',
                value: true,
              },
              {
                type: 'el-input-number',
                label: '字号',
                name: 'fontSizeX',
                required: false,
                placeholder: '',
                value: 12,
              },
              {
                type: 'vue-color',
                label: '颜色',
                name: 'Xcolor',
                required: false,
                placeholder: '',
                value: '#fff',
              },
              {
                type: 'el-slider',
                label: '文字角度',
                name: 'textAngle',
                required: false,
                placeholder: '',
                value: 0
              },
              {
                type: 'el-input-number',
                label: '文字间隔',
                name: 'textInterval',
                required: false,
                placeholder: '',
                value: ''
              },
              {
                type: 'el-switch',
                label: '轴反转',
                name: 'reversalX',
                required: false,
                placeholder: '',
                value: false
              },
              {
                type: 'vue-color',
                label: '轴颜色',
                name: 'lineColorX',
                required: false,
                placeholder: '',
                value: '#fff',
              },
              {
                type: 'el-switch',
                label: '分割线显示',
                name: 'isShowSplitLineX',
                require: false,
                placeholder: '',
                value: false,
              },
              {
                type: 'vue-color',
                label: '分割线颜色',
                name: 'splitLineColorX',
                required: false,
                placeholder: '',
                value: '#fff',
              }
            ],
          },
          {
            name: 'Y轴设置',
            list: [
              {
                type: 'el-input-text',
                label: '名称',
                name: 'textNameY',
                require: false,
                placeholder: '',
                value: ''
              },
              {
                type: 'el-switch',
                label: '显示',
                name: 'isShowY',
                require: false,
                placeholder: '',
                value: true,
              },
              {
                type: 'vue-color',
                label: '颜色',
                name: 'colorY',
                required: false,
                placeholder: '',
                value: '#fff',
              },
              {
                type: 'el-input-number',
                label: '字号',
                name: 'fontSizeY',
                required: false,
                placeholder: '',
                value: 12,
              },
              {
                type: 'el-slider',
                label: '文字角度',
                name: 'ytextAngle',
                required: false,
                placeholder: '',
                value: 0
              },
              {
                type: 'el-input-number',
                label: '文字间隔',
                name: 'ytextInterval',
                required: false,
                placeholder: '',
                value: ''
              },
              {
                type: 'el-switch',
                label: '轴反转',
                name: 'reversalY',
                required: false,
                placeholder: '',
                value: false
              },
              {
                type: 'vue-color',
                label: '轴颜色',
                name: 'lineColorY',
                required: false,
                placeholder: '',
                value: '#fff',
              },
              {
                type: 'el-switch',
                label: '分割线显示',
                name: 'isShowSplitLineY',
                require: false,
                placeholder: '',
                value: false,
              }, {
                type: 'vue-color',
                label: '分割线颜色',
                name: 'splitLineColorY',
                required: false,
                placeholder: '',
                value: '#fff',

              }
            ],
          },
          {
            name: '数值设定',
            list: [
              {
                type: 'el-switch',
                label: '显示',
                name: 'isShow',
                required: false,
                placeholder: '',
                value: false
              },
              {
                type: 'el-input-number',
                label: '字体大小',
                name: 'fontSize',
                required: false,
                placeholder: '',
                value: 14
              },
              {
                type: 'vue-color',
                label: '字体颜色',
                name: 'subTextColor',
                required: false,
                placeholder: '',
                value: '#fff'
              },
              {
                type: 'el-select',
                label: '字体粗细',
                name: 'fontWeight',
                required: false,
                placeholder: '',
                selectOptions: [
                  {code: 'normal', name: '正常'},
                  {code: 'bold', name: '粗体'},
                  {code: 'bolder', name: '特粗体'},
                  {code: 'lighter', name: '细体'}
                ],
                value: 'normal'
              },
            ],
          },
          {
            name: '坐标轴边距设置',
            list: [
              {
                type: 'el-slider',
                label: '左边距(像素)',
                name: 'marginLeft',
                required: false,
                placeholder: '',
                value: 10,
              }, {
                type: 'el-slider',
                label: '顶边距(像素)',
                name: 'marginTop',
                required: false,
                placeholder: '',
                value: 50,
              }, {
                type: 'el-slider',
                label: '右边距(像素)',
                name: 'marginRight',
                required: false,
                placeholder: '',
                value: 40,
              }, {
                type: 'el-slider',
                label: '底边距(像素)',
                name: 'marginBottom',
                required: false,
                placeholder: '',
                value: 10,
              },
            ],
          },
          {
            name: '渐变色',
            list: [
              {
                type: 'vue-color',
                label: '0%处',
                name: 'bar0color',
                required: false,
                placeholder: '',
                value: '#00F4FF'
              },
              {
                type: 'vue-color',
                label: '100%处',
                name: 'bar100color',
                required: false,
                placeholder: '',
                value: '#004DA7'
              },
              {
                type: 'vue-color',
                label: '阴影颜色',
                name: 'shadowColor',
                required: false,
                placeholder: '',
                value: '#00A0DD'
              },
              {
                type: 'el-input-number',
                label: '模糊系数',
                name: 'shadowBlur',
                required: false,
                placeholder: '',
                value: 4,
              },
            ],
          },
        ],
      ],
      // 数据
      data: [
        {
          type: 'el-radio-group',
          label: '数据类型',
          name: 'dataType',
          require: false,
          placeholder: '',
          selectValue: true,
          selectOptions: [
            {
              code: 'staticData',
              name: '静态数据',
            },
            {
              code: 'dynamicData',
              name: '动态数据',
            },
          ],
          value: 'staticData',
        },
        {
          type: 'el-input-number',
          label: '刷新时间(毫秒)',
          name: 'refreshTime',
          relactiveDom: 'dataType',
          relactiveDomValue: 'dynamicData',
          value: 5000
        },
        {
          type: 'el-button',
          label: '静态数据',
          name: 'staticData',
          required: false,
          placeholder: 'px',
          relactiveDom: 'dataType',
          relactiveDomValue: 'staticData',
          value: '{"categories": ["苹果","三星","小米","oppo","vivo"],"series": [{"name": "手机品牌","data": [1000,2229,3879,2379,4079]}]}',
        },
        {
          type: 'dycustComponents',
          label: '',
          name: 'dynamicData',
          required: false,
          placeholder: 'px',
          relactiveDom: 'dataType',
          relactiveDomValue: 'dynamicData',
          chartType: 'widget-barchart',
          value: '',
        },
      ],
      // 坐标
      position: [
        {
          type: 'el-input-number',
          label: '左边距',
          name: 'left',
          required: false,
          placeholder: 'px',
          value: 0,
        },
        {
          type: 'el-input-number',
          label: '上边距',
          name: 'top',
          required: false,
          placeholder: 'px',
          value: 0,
        },
        {
          type: 'el-input-number',
          label: '宽度',
          name: 'width',
          required: false,
          placeholder: '该容器在1920px大屏中的宽度',
          value: 400,
        },
        {
          type: 'el-input-number',
          label: '高度',
          name: 'height',
          required: false,
          placeholder: '该容器在1080px大屏中的高度',
          value: 200,
        },
      ],
    },
  },
  {
    code: 'widget-linechart',
    type: 'chart',
    label: '折线图',
    icon: 'icontubiaozhexiantu',
    options: {
      // 配置
      setup: [
        {
          type: 'el-input-text',
          label: '图层名称',
          name: 'layerName',
          required: false,
          placeholder: '',
          value: '折线图',
        },
        {
          type: 'vue-color',
          label: '背景颜色',
          name: 'background',
          required: false,
          placeholder: '',
          value: ''
        },
        [
          {
            name: '折线设置',
            list: [
              {
                type: 'el-switch',
                label: '标记点',
                name: 'markPoint',
                required: false,
                placeholder: '',
                value: true,
              },
              {
                type: 'el-slider',
                label: '点大小',
                name: 'pointSize',
                required: false,
                placeholder: '',
                value: 10,
              },
              {
                type: 'el-switch',
                label: '平滑曲线',
                name: 'smoothCurve',
                required: false,
                placeholder: '',
                value: true,
              },
              {
                type: 'el-switch',
                label: '面积堆积',
                name: 'area',
                required: false,
                placeholder: '',
                value: true,
              },
              {
                type: 'el-slider',
                label: '面积厚度',
                name: 'areaThickness',
                required: false,
                placeholder: '',
                value: 5,
              },
              {
                type: 'el-slider',
                label: '线条宽度',
                name: 'lineWidth',
                required: false,
                placeholder: '',
                value: 4,
              },
            ],
          },
          {
            name: '标题设置',
            list: [
              {
                type: 'el-switch',
                label: '标题',
                name: 'isNoTitle',
                required: false,
                placeholder: '',
                value: false
              },
              {
                type: 'el-input-text',
                label: '标题',
                name: 'titleText',
                required: false,
                placeholder: '',
                value: '',
              },
              {
                type: 'vue-color',
                label: '字体颜色',
                name: 'textColor',
                required: false,
                placeholder: '',
                value: '##FFD700'
              },
              {
                type: 'el-select',
                label: '字体粗细',
                name: 'textFontWeight',
                required: false,
                placeholder: '',
                selectOptions: [
                  {code: 'normal', name: '正常'},
                  {code: 'bold', name: '粗体'},
                  {code: 'bolder', name: '特粗体'},
                  {code: 'lighter', name: '细体'}
                ],
                value: 'normal'
              },
              {
                type: 'el-input-number',
                label: '字体大小',
                name: 'textFontSize',
                required: false,
                placeholder: '',
                value: 20
              },
              {
                type: 'el-select',
                label: '字体位置',
                name: 'textAlign',
                required: false,
                placeholder: '',
                selectOptions: [
                  {code: 'center', name: '居中'},
                  {code: 'left', name: '左对齐'},
                  {code: 'right', name: '右对齐'},
                ],
                value: 'center'
              },
              {
                type: 'el-input-text',
                label: '副标题',
                name: 'subText',
                required: false,
                placeholder: '',
                value: ''
              },
              {
                type: 'vue-color',
                label: '字体颜色',
                name: 'subTextColor',
                required: false,
                placeholder: '',
                value: '#fff'
              },
              {
                type: 'el-select',
                label: '字体粗细',
                name: 'subTextFontWeight',
                required: false,
                placeholder: '',
                selectOptions: [
                  {code: 'normal', name: '正常'},
                  {code: 'bold', name: '粗体'},
                  {code: 'bolder', name: '特粗体'},
                  {code: 'lighter', name: '细体'}
                ],
                value: 'normal'
              },
              {
                type: 'el-input-number',
                label: '字体大小',
                name: 'subTextFontSize',
                required: false,
                placeholder: '',
                value: 20
              },
            ],
          },
          {
            name: 'X轴设置',
            list: [
              {
                type: 'el-input-text',
                label: '名称',
                name: 'xName',
                required: false,
                placeholder: '',
                value: ''
              },
              {
                type: 'el-switch',
                label: '显示',
                name: 'hideX',
                required: false,
                placeholder: '',
                value: true,
              },
              {
                type: 'vue-color',
                label: '坐标名颜色',
                name: 'xNameColor',
                required: false,
                placeholder: '',
                value: '#fff'
              },
              {
                type: 'el-input-number',
                label: '字体大小',
                name: 'xNameFontSize',
                required: false,
                placeholder: '',
                value: 12
              },
              {
                type: 'el-slider',
                label: '文字角度',
                name: 'textAngle',
                required: false,
                placeholder: '',
                value: 0
              },
              {
                type: 'el-input-number',
                label: '文字间隔',
                name: 'textInterval',
                required: false,
                placeholder: '',
                value: 0
              },
              {
                type: 'el-switch',
                label: '轴反转',
                name: 'reversalX',
                required: false,
                placeholder: '',
                value: false
              },
              {
                type: 'vue-color',
                label: '颜色',
                name: 'Xcolor',
                required: false,
                placeholder: '',
                value: '#fff',
              },
              {
                type: 'el-input-text',
                label: '字号',
                name: 'fontSizeX',
                required: false,
                placeholder: '',
                value: 12,
              },
              {
                type: 'vue-color',
                label: '轴颜色',
                name: 'lineColorX',
                required: false,
                placeholder: '',
                value: '#fff',
              },
              {
                type: 'el-switch',
                label: '分割线显示',
                name: 'isShowSplitLineX',
                require: false,
                placeholder: '',
                value: false,
              },
              {
                type: 'vue-color',
                label: '分割线颜色',
                name: 'splitLineColorX',
                required: false,
                placeholder: '',
                value: '#fff',

              }
            ],
          },
          {
            name: 'Y轴设置',
            list: [
              {
                type: 'el-input-text',
                label: '名称',
                name: 'textNameY',
                require: false,
                placeholder: '',
                value: ''
              },
              {
                type: 'el-switch',
                label: '显示',
                name: 'isShowY',
                require: false,
                placeholder: '',
                value: true,
              },
              {
                type: 'vue-color',
                label: '坐标名颜色',
                name: 'NameColorY',
                required: false,
                placeholder: '',
                value: '#fff'
              },
              {
                type: 'el-input-text',
                label: '字体大小',
                name: 'NameFontSizeY',
                required: false,
                placeholder: '',
                value: 12
              },
              {
                type: 'el-switch',
                label: '轴反转',
                name: 'reversalY',
                required: false,
                placeholder: '',
                value: false
              },
              {
                type: 'vue-color',
                label: '颜色',
                name: 'colorY',
                required: false,
                placeholder: '',
                value: '#fff',
              },
              {
                type: 'el-input-text',
                label: '字号',
                name: 'fontSizeY',
                required: false,
                placeholder: '',
                value: 12,
              },
              {
                type: 'vue-color',
                label: '轴颜色',
                name: 'lineColorY',
                required: false,
                placeholder: '',
                value: '#fff',
              },
              {
                type: 'el-switch',
                label: '分割线显示',
                name: 'isShowSplitLineY',
                require: false,
                placeholder: '',
                value: false,
              }, {
                type: 'vue-color',
                label: '分割线颜色',
                name: 'splitLineColorY',
                required: false,
                placeholder: '',
                value: '#fff',

              }
            ],
          },
          {
            name: '数值设定',
            list: [
              {
                type: 'el-switch',
                label: '显示',
                name: 'isShow',
                required: false,
                placeholder: '',
                value: false
              },
              {
                type: 'el-input-number',
                label: '字体大小',
                name: 'fontSize',
                required: false,
                placeholder: '',
                value: 12
              },
              {
                type: 'vue-color',
                label: '字体颜色',
                name: 'subTextColor',
                required: false,
                placeholder: '',
                value: '#fff'
              },
              {
                type: 'el-select',
                label: '字体粗细',
                name: 'fontWeight',
                required: false,
                placeholder: '',
                selectOptions: [
                  {code: 'normal', name: '正常'},
                  {code: 'bold', name: '粗体'},
                  {code: 'bolder', name: '特粗体'},
                  {code: 'lighter', name: '细体'}
                ],
                value: 'normal'
              },
            ],
          },
          {
            name: '提示语设置',
            list: [
              {
                type: 'el-input-text',
                label: '字体大小',
                name: 'fontSize',
                required: false,
                placeholder: '',
                value: ''
              },
              {
                type: 'vue-color',
                label: '字体颜色',
                name: 'lineColor',
                required: false,
                placeholder: '',
                value: ''
              },
            ],
          },
          {
            name: '坐标轴边距设置',
            list: [
              {
                type: 'el-slider',
                label: '左边距(像素)',
                name: 'marginLeft',
                required: false,
                placeholder: '',
                value: 10,
              },
              {
                type: 'el-slider',
                label: '顶边距(像素)',
                name: 'marginTop',
                required: false,
                placeholder: '',
                value: 50,
              },
              {
                type: 'el-slider',
                label: '右边距(像素)',
                name: 'marginRight',
                required: false,
                placeholder: '',
                value: 40,
              },
              {
                type: 'el-slider',
                label: '底边距(像素)',
                name: 'marginBottom',
                required: false,
                placeholder: '',
                value: 10,
              },
            ],
          },
          {
            name: '图例操作',
            list: [
              {
                type: 'el-switch',
                label: '图例',
                name: 'isShowLegend',
                required: false,
                placeholder: '',
                value: true,
              },
              {
                type: 'vue-color',
                label: '字体颜色',
                name: 'lengedColor',
                required: false,
                placeholder: '',
                value: '#fff',
              },
              {
                type: 'el-input-number',
                label: '字体大小',
                name: 'lengedFontSize',
                required: false,
                placeholder: '',
                value: 16,
              },
              {
                type: 'el-input-number',
                label: '图例宽度',
                name: 'lengedWidth',
                required: false,
                placeholder: '',
                value: 15,
              },
              {
                type: 'el-select',
                label: '横向位置',
                name: 'lateralPosition',
                required: false,
                placeholder: '',
                selectOptions: [
                  {code: 'left', name: '左对齐'},
                  {code: 'right', name: '右对齐'},
                ],
                value: 'left'
              },
              {
                type: 'el-select',
                label: '纵向位置',
                name: 'longitudinalPosition',
                required: false,
                placeholder: '',
                selectOptions: [
                  {code: 'top', name: '顶部'},
                  {code: 'bottom', name: '底部'},
                ],
                value: ''
              },
              {
                type: 'el-select',
                label: '布局前置',
                name: 'layoutFront',
                required: false,
                placeholder: '',
                selectOptions: [
                  {code: 'vertical', name: '竖排'},
                  {code: 'horizontal', name: '横排'},
                ],
                value: ''
              },
            ],
          },
          {
            name: '自定义配色',
            list: [
              {
                type: 'customColor',
                label: '',
                name: 'customColor',
                required: false,
                value: [{color: '#1E90FF'}],
              },
            ],
          },
        ],
      ],
      // 数据
      data: [
        {
          type: 'el-radio-group',
          label: '数据类型',
          name: 'dataType',
          require: false,
          placeholder: '',
          selectValue: true,
          selectOptions: [
            {
              code: 'staticData',
              name: '静态数据',
            },
            {
              code: 'dynamicData',
              name: '动态数据',
            },
          ],
          value: 'staticData',
        },
        {
          type: 'el-input-number',
          label: '刷新时间(毫秒)',
          name: 'refreshTime',
          relactiveDom: 'dataType',
          relactiveDomValue: 'dynamicData',
          value: 5000
        },
        {
          type: 'el-button',
          label: '静态数据',
          name: 'staticData',
          required: false,
          placeholder: 'px',
          relactiveDom: 'dataType',
          relactiveDomValue: 'staticData',
          value: '{"categories": ["苹果","三星","小米","oppo","vivo"],"series": [{"name": "手机品牌","data": [1009,3409,2309,5409,3409]}]}',
        },
        {
          type: 'dycustComponents',
          label: '',
          name: 'dynamicData',
          required: false,
          placeholder: 'px',
          relactiveDom: 'dataType',
          chartType: 'widget-linechart',
          relactiveDomValue: 'dynamicData',
        },
      ],
      // 坐标
      position: [
        {
          type: 'el-input-number',
          label: '左边距',
          name: 'left',
          required: false,
          placeholder: 'px',
          value: 0,
        },
        {
          type: 'el-input-number',
          label: '上边距',
          name: 'top',
          required: false,
          placeholder: 'px',
          value: 0,
        },
        {
          type: 'el-input-number',
          label: '宽度',
          name: 'width',
          required: false,
          placeholder: '该容器在1920px大屏中的宽度',
          value: 400,
        },
        {
          type: 'el-input-number',
          label: '高度',
          name: 'height',
          required: false,
          placeholder: '该容器在1080px大屏中的高度',
          value: 200,
        },
      ],
    },
  },
  {
    code: 'widget-barlinechart',
    type: 'chart',
    label: '柱线图',
    icon: 'iconzhuxiantu',
    options: {
      // 配置
      setup: [
        {
          type: 'el-input-text',
          label: '图层名称',
          name: 'layerName',
          required: false,
          placeholder: '',
          value: '柱线图',
        },
        {
          type: 'vue-color',
          label: '背景颜色',
          name: 'background',
          required: false,
          placeholder: '',
          value: ''
        },
        [
          {
            name: '折线设置',
            list: [
              {
                type: 'el-switch',
                label: '标记点',
                name: 'markPoint',
                required: false,
                placeholder: '',
                value: true,
              },
              {
                type: 'el-slider',
                label: '点大小',
                name: 'pointSize',
                required: false,
                placeholder: '',
                value: 5,
              },
              {
                type: 'el-switch',
                label: '平滑曲线',
                name: 'smoothCurve',
                required: false,
                placeholder: '',
                value: true,
              },
              {
                type: 'el-switch',
                label: '面积堆积',
                name: 'area',
                required: false,
                placeholder: '',
                value: true,
              },
              {
                type: 'el-slider',
                label: '面积厚度',
                name: 'areaThickness',
                required: false,
                placeholder: '',
                value: 5,
              },
              {
                type: 'el-slider',
                label: '线条宽度',
                name: 'lineWidth',
                required: false,
                placeholder: '',
                value: 3,
              },
            ],
          },
          {
            name: '柱体设置',
            list: [
              {
                type: 'el-slider',
                label: '最大宽度',
                name: 'maxWidth',
                required: false,
                placeholder: '',
                value: 10,
              },
              {
                type: 'el-slider',
                label: '圆角',
                name: 'radius',
                require: false,
                placeholder: '',
                value: 5,
              },
              {
                type: 'el-slider',
                label: '最小高度',
                name: 'minHeight',
                require: false,
                placeholder: '',
                value: 0,
              },
            ],
          },
          {
            name: '标题设置',
            list: [
              {
                type: 'el-switch',
                label: '标题',
                name: 'isNoTitle',
                required: false,
                placeholder: '',
                value: true
              },
              {
                type: 'el-input-text',
                label: '标题',
                name: 'titleText',
                required: false,
                placeholder: '',
                value: ''
              },
              {
                type: 'vue-color',
                label: '字体颜色',
                name: 'textColor',
                required: false,
                placeholder: '',
                value: '#fff'
              },
              {
                type: 'el-select',
                label: '字体粗细',
                name: 'textFontWeight',
                required: false,
                placeholder: '',
                selectOptions: [
                  {code: 'normal', name: '正常'},
                  {code: 'bold', name: '粗体'},
                  {code: 'bolder', name: '特粗体'},
                  {code: 'lighter', name: '细体'}
                ],
                value: 'normal'
              },
              {
                type: 'el-input-number',
                label: '字体大小',
                name: 'textFontSize',
                required: false,
                placeholder: '',
                value: 20
              },
              {
                type: 'el-select',
                label: '字体位置',
                name: 'textAlign',
                required: false,
                placeholder: '',
                selectOptions: [
                  {code: 'center', name: '居中'},
                  {code: 'left', name: '左对齐'},
                  {code: 'right', name: '右对齐'},
                ],
                value: 'left'
              },
              {
                type: 'el-input-text',
                label: '副标题',
                name: 'subText',
                required: false,
                placeholder: '',
                value: ''
              },
              {
                type: 'vue-color',
                label: '字体颜色',
                name: 'subTextColor',
                required: false,
                placeholder: '',
                value: '#fff'
              },
              {
                type: 'el-select',
                label: '字体粗细',
                name: 'subTextFontWeight',
                required: false,
                placeholder: '',
                selectOptions: [
                  {code: 'normal', name: '正常'},
                  {code: 'bold', name: '粗体'},
                  {code: 'bolder', name: '特粗体'},
                  {code: 'lighter', name: '细体'}
                ],
                value: 'normal'
              },
              {
                type: 'el-input-number',
                label: '字体大小',
                name: 'subTextFontSize',
                required: false,
                placeholder: '',
                value: 20
              },
            ],
          },
          {
            name: 'X轴设置',
            list: [
              {
                type: 'el-input-text',
                label: '名称',
                name: 'xName',
                required: false,
                placeholder: '',
                value: ''
              },
              {
                type: 'el-switch',
                label: '显示',
                name: 'hideX',
                required: false,
                placeholder: '',
                value: true,
              },
              {
                type: 'vue-color',
                label: '坐标名颜色',
                name: 'xNameColor',
                required: false,
                placeholder: '',
                value: '#fff'
              },
              {
                type: 'el-input-number',
                label: '字体大小',
                name: 'xNameFontSize',
                required: false,
                placeholder: '',
                value: 12
              },
              {
                type: 'el-slider',
                label: '文字角度',
                name: 'textAngle',
                required: false,
                placeholder: '',
                value: 0
              },
              {
                type: 'el-input-number',
                label: '文字间隔',
                name: 'textInterval',
                required: false,
                placeholder: '',
                value: 0
              },
              {
                type: 'el-switch',
                label: '轴反转',
                name: 'reversalX',
                required: false,
                placeholder: '',
                value: 0
              },
              {
                type: 'vue-color',
                label: '颜色',
                name: 'Xcolor',
                required: false,
                placeholder: '',
                value: '#fff',
              },
              {
                type: 'el-input-number',
                label: '字号',
                name: 'fontSizeX',
                required: false,
                placeholder: '',
                value: 16,
              },
              {
                type: 'vue-color',
                label: '轴颜色',
                name: 'lineColorX',
                required: false,
                placeholder: '',
                value: '#fff',
              },
              {
                type: 'el-switch',
                label: '分割线显示',
                name: 'isShowSplitLineX',
                require: false,
                placeholder: '',
                value: false,
              },
              {
                type: 'vue-color',
                label: '分割线颜色',
                name: 'splitLineColorX',
                required: false,
                placeholder: '',
                value: '#fff',

              }
            ],
          },
          {
            name: 'Y轴设置',
            list: [
              {
                type: 'el-input-text',
                label: '名称',
                name: 'textNameY',
                require: false,
                placeholder: '',
                value: ''
              },
              {
                type: 'el-switch',
                label: '显示',
                name: 'isShowY',
                require: false,
                placeholder: '',
                value: true,
              },
              {
                type: 'vue-color',
                label: '坐标名颜色',
                name: 'NameColorY',
                required: false,
                placeholder: '',
                value: '#fff'
              },
              {
                type: 'el-input-number',
                label: '字体大小',
                name: 'NameFontSizeY',
                required: false,
                placeholder: '',
                value: 12
              },
              {
                type: 'el-switch',
                label: '轴反转',
                name: 'reversalY',
                required: false,
                placeholder: '',
                value: 0
              },
              {
                type: 'vue-color',
                label: '颜色',
                name: 'colorY',
                required: false,
                placeholder: '',
                value: '#fff',
              },
              {
                type: 'el-input-number',
                label: '字号',
                name: 'fontSizeY',
                required: false,
                placeholder: '',
                value: 12,
              },
              {
                type: 'vue-color',
                label: '轴颜色',
                name: 'lineColorY',
                required: false,
                placeholder: '',
                value: '#fff',
              },
              {
                type: 'el-switch',
                label: '分割线显示',
                name: 'isShowSplitLineY',
                require: false,
                placeholder: '',
                value: false,
              }, {
                type: 'vue-color',
                label: '分割线颜色',
                name: 'splitLineColorY',
                required: false,
                placeholder: '',
                value: '#fff',

              }
            ],
          },
          {
            name: '提示语设置',
            list: [
              {
                type: 'el-input-number',
                label: '字体大小',
                name: 'fontSize',
                required: false,
                placeholder: '',
                value: 12
              },
              {
                type: 'vue-color',
                label: '字体颜色',
                name: 'lineColor',
                required: false,
                placeholder: '',
                value: '#fff'
              },
            ],
          },
          {
            name: '坐标轴边距设置',
            list: [
              {
                type: 'el-slider',
                label: '左边距(像素)',
                name: 'marginLeft',
                required: false,
                placeholder: '',
                value: 10,
              }, {
                type: 'el-slider',
                label: '顶边距(像素)',
                name: 'marginTop',
                required: false,
                placeholder: '',
                value: 50,
              }, {
                type: 'el-slider',
                label: '右边距(像素)',
                name: 'marginRight',
                required: false,
                placeholder: '',
                value: 40,
              }, {
                type: 'el-slider',
                label: '底边距(像素)',
                name: 'marginBottom',
                required: false,
                placeholder: '',
                value: 10,
              },
            ],
          },
          {
            name: '图例操作',
            list: [
              {
                type: 'el-switch',
                label: '图例',
                name: 'isShowLegend',
                required: false,
                placeholder: '',
                value: true,
              },
              {
                type: 'vue-color',
                label: '字体颜色',
                name: 'lengedColor',
                required: false,
                placeholder: '',
                value: '#fff',
              },
              {
                type: 'el-input-text',
                label: '字体大小',
                name: 'lengedFontSize',
                required: false,
                placeholder: '',
                value: 16,
              },
              {
                type: 'el-input-number',
                label: '图例宽度',
                name: 'lengedWidth',
                required: false,
                placeholder: '',
                value: 15,
              },
              {
                type: 'el-select',
                label: '横向位置',
                name: 'lateralPosition',
                required: false,
                placeholder: '',
                selectOptions: [
                  {code: 'left', name: '左对齐'},
                  {code: 'right', name: '右对齐'},
                ],
                value: ''
              },
              {
                type: 'el-select',
                label: '纵向位置',
                name: 'longitudinalPosition',
                required: false,
                placeholder: '',
                selectOptions: [
                  {code: 'top', name: '顶部'},
                  {code: 'bottom', name: '底部'},
                ],
                value: ''
              },
              {
                type: 'el-select',
                label: '布局前置',
                name: 'layoutFront',
                required: false,
                placeholder: '',
                selectOptions: [
                  {code: 'vertical', name: '竖排'},
                  {code: 'horizontal', name: '横排'},
                ],
                value: ''
              },
            ],
          },
          {
            name: '自定义配色',
            list: [
              {
                type: 'customColor',
                label: '',
                name: 'customColor',
                required: false,
                value: [{color: '#00F4FFFF'}, {color: '#42fffd'}],
              },
            ],
          },
        ],
      ],
      // 数据
      data: [
        {
          type: 'el-radio-group',
          label: '数据类型',
          name: 'dataType',
          require: false,
          placeholder: '',
          selectValue: true,
          selectOptions: [
            {
              code: 'staticData',
              name: '静态数据',
            },
            {
              code: 'dynamicData',
              name: '动态数据',
            },
          ],
          value: 'staticData',
        },
        {
          type: 'el-input-number',
          label: '刷新时间(毫秒)',
          name: 'refreshTime',
          relactiveDom: 'dataType',
          relactiveDomValue: 'dynamicData',
          value: 5000
        },
        {
          type: 'el-button',
          label: '静态数据',
          name: 'staticData',
          required: false,
          placeholder: 'px',
          relactiveDom: 'dataType',
          relactiveDomValue: 'staticData',
          value: '{"xAxis": ["1月", "2月", "3月", "4月", "5月","6月", "7月", "8月","9月","10月","11月","12月"],"series": [{"type": "bar","name": "货运量","data": [2.6,5.9,9,26.4,28.7,70.7,175.6,182.2,48.7,18.8,6,2.3]},{"type": "line","name": "货运总量","yAxisIndex": 1,"data": [2,2.2,3.3,4.5,6.3,10.2,20.3,23.4,23,16.5,12,6.2]}]}',
        },
        {
          type: 'dycustComponents',
          label: '',
          name: 'dynamicData',
          required: false,
          placeholder: 'px',
          relactiveDom: 'dataType',
          chartType: 'widget-barlinechart',
          relactiveDomValue: 'dynamicData',
        },
      ],
      // 坐标
      position: [
        {
          type: 'el-input-number',
          label: '左边距',
          name: 'left',
          required: false,
          placeholder: 'px',
          value: 0,
        },
        {
          type: 'el-input-number',
          label: '上边距',
          name: 'top',
          required: false,
          placeholder: 'px',
          value: 0,
        },
        {
          type: 'el-input-number',
          label: '宽度',
          name: 'width',
          required: false,
          placeholder: '该容器在1920px大屏中的宽度',
          value: 400,
        },
        {
          type: 'el-input-number',
          label: '高度',
          name: 'height',
          required: false,
          placeholder: '该容器在1080px大屏中的高度',
          value: 200,
        },
      ],
    },
  },
  {
    code: 'widget-piechart',
    type: 'chart',
    label: '饼图',
    icon: 'iconicon_tubiao_bingtu',
    options: {
      // 配置
      setup: [
        {
          type: 'el-input-text',
          label: '图层名称',
          name: 'layerName',
          required: false,
          placeholder: '',
          value: '饼图',
        },
        {
          type: 'vue-color',
          label: '背景颜色',
          name: 'background',
          required: false,
          placeholder: '',
          value: ''
        },
        {
          type: 'el-select',
          label: '饼图样式',
          name: 'piechartStyle',
          required: false,
          placeholder: '',
          selectOptions: [
            {code: 'shixin', name: '实心饼图'},
            {code: 'kongxin', name: '空心饼图'},
          ],
          value: 'shixin'
        },
        [
          {
            name: '标题设置',
            list: [
              {
                type: 'el-switch',
                label: '标题',
                name: 'isNoTitle',
                required: false,
                placeholder: '',
                value: true
              },
              {
                type: 'el-input-text',
                label: '标题',
                name: 'titleText',
                required: false,
                placeholder: '',
                value: ''
              },
              {
                type: 'vue-color',
                label: '字体颜色',
                name: 'textColor',
                required: false,
                placeholder: '',
                value: '#fff'
              },
              {
                type: 'el-select',
                label: '字体粗细',
                name: 'textFontWeight',
                required: false,
                placeholder: '',
                selectOptions: [
                  {code: 'normal', name: '正常'},
                  {code: 'bold', name: '粗体'},
                  {code: 'bolder', name: '特粗体'},
                  {code: 'lighter', name: '细体'}
                ],
                value: 'normal'
              },
              {
                type: 'el-input-number',
                label: '字体大小',
                name: 'textFontSize',
                required: false,
                placeholder: '',
                value: 20
              },
              {
                type: 'el-select',
                label: '字体位置',
                name: 'textAlign',
                required: false,
                placeholder: '',
                selectOptions: [
                  {code: 'center', name: '居中'},
                  {code: 'left', name: '左对齐'},
                  {code: 'right', name: '右对齐'},
                ],
                value: 'left'
              },
              {
                type: 'el-input-text',
                label: '副标题',
                name: 'subText',
                required: false,
                placeholder: '',
                value: ''
              },
              {
                type: 'vue-color',
                label: '字体颜色',
                name: 'subTextColor',
                required: false,
                placeholder: '',
                value: ''
              },
              {
                type: 'el-select',
                label: '字体粗细',
                name: 'subTextFontWeight',
                required: false,
                placeholder: '',
                selectOptions: [
                  {code: 'normal', name: '正常'},
                  {code: 'bold', name: '粗体'},
                  {code: 'bolder', name: '特粗体'},
                  {code: 'lighter', name: '细体'}
                ],
                value: 'normal'
              },
              {
                type: 'el-input-number',
                label: '字体大小',
                name: 'subTextFontSize',
                required: false,
                placeholder: '',
                value: 12
              },
            ],
          },
          {
            name: '数值设定',
            list: [
              {
                type: 'el-switch',
                label: '显示',
                name: 'isShow',
                required: false,
                placeholder: '',
                value: true,
              },
              {
                type: 'el-switch',
                label: '数值',
                name: 'numberValue',
                require: false,
                placeholder: '',
                value: true,
              },
              {
                type: 'el-switch',
                label: '百分比',
                name: 'percentage',
                require: false,
                placeholder: '',
                value: false,
              },
              {
                type: 'el-input-number',
                label: '字体大小',
                name: 'fontSize',
                required: false,
                placeholder: '',
                value: 14,
              },
              {
                type: 'vue-color',
                label: '字体颜色',
                name: 'subTextColor',
                required: false,
                placeholder: '',
                value: ''
              },
              {
                type: 'el-select',
                label: '字体粗细',
                name: 'fontWeight',
                required: false,
                placeholder: '',
                selectOptions: [
                  {code: 'normal', name: '正常'},
                  {code: 'bold', name: '粗体'},
                  {code: 'bolder', name: '特粗体'},
                  {code: 'lighter', name: '细体'}
                ],
                value: 'normal'
              },
            ],
          },
          {
            name: '提示语设置',
            list: [
              {
                type: 'el-input-number',
                label: '字体大小',
                name: 'fontSize',
                required: false,
                placeholder: '',
                value: 12
              },
              {
                type: 'vue-color',
                label: '网格线颜色',
                name: 'lineColor',
                required: false,
                placeholder: '',
                value: ''
              },
            ],
          },
          {
            name: '图例操作',
            list: [
              {
                type: 'el-switch',
                label: '图例',
                name: 'isShowLegend',
                required: false,
                placeholder: '',
                value: true,
              },
              {
                type: 'vue-color',
                label: '字体颜色',
                name: 'lengedColor',
                required: false,
                placeholder: '',
                value: '#fff',
              },
              {
                type: 'el-input-text',
                label: '字体大小',
                name: 'lengedFontSize',
                required: false,
                placeholder: '',
                value: 16,
              },
              {
                type: 'el-input-number',
                label: '图例宽度',
                name: 'lengedWidth',
                required: false,
                placeholder: '',
                value: 15,
              },
              {
                type: 'el-select',
                label: '横向位置',
                name: 'lateralPosition',
                required: false,
                placeholder: '',
                selectOptions: [
                  {code: 'left', name: '左对齐'},
                  {code: 'right', name: '右对齐'},
                ],
                value: ''
              },
              {
                type: 'el-select',
                label: '纵向位置',
                name: 'longitudinalPosition',
                required: false,
                placeholder: '',
                selectOptions: [
                  {code: 'top', name: '顶部'},
                  {code: 'bottom', name: '底部'},
                ],
                value: ''
              },
              {
                type: 'el-select',
                label: '布局前置',
                name: 'layoutFront',
                required: false,
                placeholder: '',
                selectOptions: [
                  {code: 'vertical', name: '竖排'},
                  {code: 'horizontal', name: '横排'},
                ],
                value: ''
              },
            ],
          },
          {
            name: '自定义配色',
            list: [
              {
                type: 'customColor',
                label: '',
                name: 'customColor',
                required: false,
                value: [{color: '#0CD2E6'}, {color: '#00BFA5'}, {color: '#FFC722'}, {color: '#886EFF'}, {color: '#008DEC'}],
              },
            ],
          },
        ],
      ],
      // 数据
      data: [
        {
          type: 'el-radio-group',
          label: '数据类型',
          name: 'dataType',
          require: false,
          placeholder: '',
          selectValue: true,
          selectOptions: [
            {
              code: 'staticData',
              name: '静态数据',
            },
            {
              code: 'dynamicData',
              name: '动态数据',
            },
          ],
          value: 'staticData',
        },
        {
          type: 'el-input-number',
          label: '刷新时间(毫秒)',
          name: 'refreshTime',
          relactiveDom: 'dataType',
          relactiveDomValue: 'dynamicData',
          value: 5000
        },
        {
          type: 'el-button',
          label: '静态数据',
          name: 'staticData',
          required: false,
          placeholder: 'px',
          relactiveDom: 'dataType',
          relactiveDomValue: 'staticData',
          value: '[{"value": 1048,"name": "搜索引擎"},{"value": 735, "name": "直接访问"},{"value": 580, "name": "邮件营销"},{"value": 484,"name":"联盟广告"},{"value":300,"name":"视频广告"}]',
        },
        {
          type: 'dycustComponents',
          label: '',
          name: 'dynamicData',
          required: false,
          placeholder: 'px',
          relactiveDom: 'dataType',
          chartType: 'widget-piechart',
          relactiveDomValue: 'dynamicData',
          value: '',
        },
      ],
      // 坐标
      position: [
        {
          type: 'el-input-number',
          label: '左边距',
          name: 'left',
          required: false,
          placeholder: 'px',
          value: 0,
        },
        {
          type: 'el-input-number',
          label: '上边距',
          name: 'top',
          required: false,
          placeholder: 'px',
          value: 0,
        },
        {
          type: 'el-input-number',
          label: '宽度',
          name: 'width',
          required: false,
          placeholder: '该容器在1920px大屏中的宽度',
          value: 400,
        },
        {
          type: 'el-input-number',
          label: '高度',
          name: 'height',
          required: false,
          placeholder: '该容器在1080px大屏中的高度',
          value: 200,
        },
      ],
    },
  },
  {
    code: 'widget-hollow-piechart',
    type: 'chart',
    label: '空心饼图',
    icon: 'icon020kongxinbingtu',
    options: {
      // 配置
      setup: [
        {
          type: 'el-input-text',
          label: '图层名称',
          name: 'layerName',
          required: false,
          placeholder: '',
          value: '空心饼图',
        },
        {
          type: 'vue-color',
          label: '背景颜色',
          name: 'background',
          required: false,
          placeholder: '',
          value: ''
        },
        [
          {
            name: '标题设置',
            list: [
              {
                type: 'el-switch',
                label: '标题',
                name: 'isNoTitle',
                required: false,
                placeholder: '',
                value: true
              },
              {
                type: 'el-input-text',
                label: '标题',
                name: 'titleText',
                required: false,
                placeholder: '',
                value: ''
              },
              {
                type: 'vue-color',
                label: '字体颜色',
                name: 'textColor',
                required: false,
                placeholder: '',
                value: ''
              },
              {
                type: 'el-select',
                label: '字体粗细',
                name: 'textFontWeight',
                required: false,
                placeholder: '',
                selectOptions: [
                  {code: 'normal', name: '正常'},
                  {code: 'bold', name: '粗体'},
                  {code: 'bolder', name: '特粗体'},
                  {code: 'lighter', name: '细体'}
                ],
                value: 'normal'
              },
              {
                type: 'el-input-number',
                label: '字体大小',
                name: 'textFontSize',
                required: false,
                placeholder: '',
                value: 20
              },
              {
                type: 'el-select',
                label: '字体位置',
                name: 'textAlign',
                required: false,
                placeholder: '',
                selectOptions: [
                  {code: 'center', name: '居中'},
                  {code: 'left', name: '左对齐'},
                  {code: 'right', name: '右对齐'},
                ],
                value: 'left'
              },
              {
                type: 'el-input-text',
                label: '副标题',
                name: 'subText',
                required: false,
                placeholder: '',
                value: ''
              },
              {
                type: 'vue-color',
                label: '字体颜色',
                name: 'subTextColor',
                required: false,
                placeholder: '',
                value: ''
              },
              {
                type: 'el-select',
                label: '字体粗细',
                name: 'subTextFontWeight',
                required: false,
                placeholder: '',
                selectOptions: [
                  {code: 'normal', name: '正常'},
                  {code: 'bold', name: '粗体'},
                  {code: 'bolder', name: '特粗体'},
                  {code: 'lighter', name: '细体'}
                ],
                value: 'normal'
              },
              {
                type: 'el-input-number',
                label: '字体大小',
                name: 'subTextFontSize',
                required: false,
                placeholder: '',
                value: ''
              },
            ],
          },
          {
            name: '数值设定',
            list: [
              {
                type: 'el-switch',
                label: '显示',
                name: 'isShow',
                required: false,
                placeholder: '',
                value: true,
              },
              {
                type: 'el-switch',
                label: '数值',
                name: 'numberValue',
                require: false,
                placeholder: '',
                value: false,
              },
              {
                type: 'el-switch',
                label: '百分比',
                name: 'percentage',
                require: false,
                placeholder: '',
                value: true,
              },
              {
                type: 'el-input-number',
                label: '字体大小',
                name: 'fontSize',
                required: false,
                placeholder: '',
                value: ''
              },
              {
                type: 'vue-color',
                label: '字体颜色',
                name: 'subTextColor',
                required: false,
                placeholder: '',
                value: ''
              },
              {
                type: 'el-select',
                label: '字体粗细',
                name: 'fontWeight',
                required: false,
                placeholder: '',
                selectOptions: [
                  {code: 'normal', name: '正常'},
                  {code: 'bold', name: '粗体'},
                  {code: 'bolder', name: '特粗体'},
                  {code: 'lighter', name: '细体'}
                ],
                value: 'normal'
              },
            ],
          },
          {
            name: '提示语设置',
            list: [
              {
                type: 'el-input-number',
                label: '字体大小',
                name: 'fontSize',
                required: false,
                placeholder: '',
                value: ''
              },
              {
                type: 'vue-color',
                label: '网格线颜色',
                name: 'lineColor',
                required: false,
                placeholder: '',
                value: ''
              },
            ],
          },
          {
            name: '图例操作',
            list: [
              {
                type: 'el-switch',
                label: '图例',
                name: 'isShowLegend',
                required: false,
                placeholder: '',
                value: true,
              },
              {
                type: 'vue-color',
                label: '字体颜色',
                name: 'lengedColor',
                required: false,
                placeholder: '',
                value: '#fff',
              },
              {
                type: 'el-input-number',
                label: '字体大小',
                name: 'lengedFontSize',
                required: false,
                placeholder: '',
                value: 16,
              },
              {
                type: 'el-input-number',
                label: '图例宽度',
                name: 'lengedWidth',
                required: false,
                placeholder: '',
                value: 10,
              },
              {
                type: 'el-select',
                label: '横向位置',
                name: 'lateralPosition',
                required: false,
                placeholder: '',
                selectOptions: [
                  {code: 'left', name: '左对齐'},
                  {code: 'right', name: '右对齐'},
                ],
                value: ''
              },
              {
                type: 'el-select',
                label: '纵向位置',
                name: 'longitudinalPosition',
                required: false,
                placeholder: '',
                selectOptions: [
                  {code: 'top', name: '顶部'},
                  {code: 'bottom', name: '底部'},
                ],
                value: ''
              },
              {
                type: 'el-select',
                label: '布局前置',
                name: 'layoutFront',
                required: false,
                placeholder: '',
                selectOptions: [
                  {code: 'vertical', name: '竖排'},
                  {code: 'horizontal', name: '横排'},
                ],
                value: ''
              },
            ],
          },
          {
            name: '自定义配色',
            list: [
              {
                type: 'customColor',
                label: '',
                name: 'customColor',
                required: false,
                value: [{color: '#0CD2E6'}, {color: '#00BFA5'}, {color: '#FFC722'}, {color: '#886EFF'}, {color: '#008DEC'}],
              },
            ],
          },
        ],
      ],
      // 数据
      data: [
        {
          type: 'el-radio-group',
          label: '数据类型',
          name: 'dataType',
          require: false,
          placeholder: '',
          selectValue: true,
          selectOptions: [
            {
              code: 'staticData',
              name: '静态数据',
            },
            {
              code: 'dynamicData',
              name: '动态数据',
            },
          ],
          value: 'staticData',
        },
        {
          type: 'el-input-number',
          label: '刷新时间(毫秒)',
          name: 'refreshTime',
          relactiveDom: 'dataType',
          relactiveDomValue: 'dynamicData',
          value: 5000
        },
        {
          type: 'el-button',
          label: '静态数据',
          name: 'staticData',
          required: false,
          placeholder: 'px',
          relactiveDom: 'dataType',
          relactiveDomValue: 'staticData',
          value: '[{"value": 1048,"name": "搜索引擎"},{"value": 735, "name": "直接访问"},{"value": 580, "name": "邮件营销"},{"value": 484,"name":"联盟广告"},{"value":300,"name":"视频广告"}]',
        },
        {
          type: 'dycustComponents',
          label: '',
          name: 'dynamicData',
          required: false,
          placeholder: 'px',
          relactiveDom: 'dataType',
          chartType: 'widget-hollow-piechart',
          relactiveDomValue: 'dynamicData',
          value: '',
        },
      ],
      // 坐标
      position: [
        {
          type: 'el-input-number',
          label: '左边距',
          name: 'left',
          required: false,
          placeholder: 'px',
          value: 0,
        },
        {
          type: 'el-input-number',
          label: '上边距',
          name: 'top',
          required: false,
          placeholder: 'px',
          value: 0,
        },
        {
          type: 'el-input-number',
          label: '宽度',
          name: 'width',
          required: false,
          placeholder: '该容器在1920px大屏中的宽度',
          value: 400,
        },
        {
          type: 'el-input-number',
          label: '高度',
          name: 'height',
          required: false,
          placeholder: '该容器在1080px大屏中的高度',
          value: 200,
        },
      ],
    },
  },
  {
    code: 'widget-funnel',
    type: 'chart',
    label: '漏斗图',
    icon: 'iconloudoutu',
    options: {
      // 配置
      setup: [
        {
          type: 'el-input-text',
          label: '图层名称',
          name: 'layerName',
          required: false,
          placeholder: '',
          value: '漏斗图',
        },
        {
          type: 'vue-color',
          label: '背景颜色',
          name: 'background',
          required: false,
          placeholder: '',
          value: ''
        },
        [
          {
            name: '文字设置',
            list: [
              {
                type: 'el-switch',
                label: '显示',
                name: 'isShow',
                require: false,
                placeholder: '',
                value: true,
              },
              {
                type: 'el-input-number',
                label: '字体大小',
                name: 'fontSize',
                require: false,
                placeholder: '',
                value: 12,
              },
              {
                type: 'vue-color',
                label: '字体颜色',
                name: 'color',
                require: false,
                placeholder: '',
                value: '#fff',
              },
              {
                type: 'el-select',
                label: '字体粗细',
                name: 'fontWeight',
                require: false,
                placeholder: '',
                selectOptions: [
                  {code: 'normal', name: '正常'},
                  {code: 'bold', name: '粗体'},
                  {code: 'bolder', name: '特粗体'},
                  {code: 'lighter', name: '细体'}
                ],
                value: 'normal'
              },
              {
                type: 'el-switch',
                label: '反转',
                name: 'reversal',
                require: false,
                placeholder: '',
                value: 0
              },
            ],
          },
          {
            name: '标题设置',
            list: [
              {
                type: 'el-switch',
                label: '标题',
                name: 'isNoTitle',
                required: false,
                placeholder: '',
                value: true
              },
              {
                type: 'el-input-text',
                label: '标题',
                name: 'titleText',
                required: false,
                placeholder: '',
                value: ''
              },
              {
                type: 'vue-color',
                label: '字体颜色',
                name: 'textColor',
                required: false,
                placeholder: '',
                value: ''
              },
              {
                type: 'el-select',
                label: '字体粗细',
                name: 'textFontWeight',
                required: false,
                placeholder: '',
                selectOptions: [
                  {code: 'normal', name: '正常'},
                  {code: 'bold', name: '粗体'},
                  {code: 'bolder', name: '特粗体'},
                  {code: 'lighter', name: '细体'}
                ],
                value: 'normal'
              },
              {
                type: 'el-input-number',
                label: '字体大小',
                name: 'textFontSize',
                required: false,
                placeholder: '',
                value: 12
              },
              {
                type: 'el-select',
                label: '字体位置',
                name: 'textAlign',
                required: false,
                placeholder: '',
                selectOptions: [
                  {code: 'center', name: '居中'},
                  {code: 'left', name: '左对齐'},
                  {code: 'right', name: '右对齐'},
                ],
                value: 'left'
              },
              {
                type: 'el-input-text',
                label: '副标题',
                name: 'subText',
                required: false,
                placeholder: '',
                value: ''
              },
              {
                type: 'vue-color',
                label: '字体颜色',
                name: 'subTextColor',
                required: false,
                placeholder: '',
                value: ''
              },
              {
                type: 'el-select',
                label: '字体粗细',
                name: 'subTextFontWeight',
                required: false,
                placeholder: '',
                selectOptions: [
                  {code: 'normal', name: '正常'},
                  {code: 'bold', name: '粗体'},
                  {code: 'bolder', name: '特粗体'},
                  {code: 'lighter', name: '细体'}
                ],
                value: 'normal'
              },
              {
                type: 'el-input-number',
                label: '字体大小',
                name: 'subTextFontSize',
                required: false,
                placeholder: '',
                value: ''
              },
            ],
          },
          {
            name: '提示语设置',
            list: [
              {
                type: 'el-input-number',
                label: '字体大小',
                name: 'fontSize',
                required: false,
                placeholder: '',
                value: ''
              },
              {
                type: 'vue-color',
                label: '网格线颜色',
                name: 'lineColor',
                required: false,
                placeholder: '',
                value: ''
              },
            ],
          },
          {
            name: '图例操作',
            list: [
              {
                type: 'el-switch',
                label: '图例',
                name: 'isShowLegend',
                required: false,
                placeholder: '',
                value: true,
              },
              {
                type: 'vue-color',
                label: '字体颜色',
                name: 'lengedColor',
                required: false,
                placeholder: '',
                value: '#fff',
              },
              {
                type: 'el-input-number',
                label: '字体大小',
                name: 'lengedFontSize',
                required: false,
                placeholder: '',
                value: 16,
              },
              {
                type: 'el-input-number',
                label: '图例宽度',
                name: 'lengedWidth',
                required: false,
                placeholder: '',
                value: 10,
              },
              {
                type: 'el-select',
                label: '横向位置',
                name: 'lateralPosition',
                required: false,
                placeholder: '',
                selectOptions: [
                  {code: 'left', name: '左对齐'},
                  {code: 'right', name: '右对齐'},
                ],
                value: ''
              },
              {
                type: 'el-select',
                label: '纵向位置',
                name: 'longitudinalPosition',
                required: false,
                placeholder: '',
                selectOptions: [
                  {code: 'top', name: '顶部'},
                  {code: 'bottom', name: '底部'},
                ],
                value: ''
              },
              {
                type: 'el-select',
                label: '布局前置',
                name: 'layoutFront',
                required: false,
                placeholder: '',
                selectOptions: [
                  {code: 'vertical', name: '竖排'},
                  {code: 'horizontal', name: '横排'},
                ],
                value: ''
              },
            ],
          },
          {
            name: '自定义配色',
            list: [
              {
                type: 'customColor',
                label: '',
                name: 'customColor',
                required: false,
                value: [{color: '#0CD2E6'}, {color: '#00BFA5'}, {color: '#FFC722'}, {color: '#886EFF'}, {color: '#008DEC'}],
              },
            ],
          },
        ],
      ],
      // 数据
      data: [
        {
          type: 'el-radio-group',
          label: '数据类型',
          name: 'dataType',
          require: false,
          placeholder: '',
          selectValue: true,
          selectOptions: [
            {
              code: 'staticData',
              name: '静态数据',
            },
            {
              code: 'dynamicData',
              name: '动态数据',
            },
          ],
          value: 'staticData',
        },
        {
          type: 'el-input-number',
          label: '刷新时间(毫秒)',
          name: 'refreshTime',
          relactiveDom: 'dataType',
          relactiveDomValue: 'dynamicData',
          value: 5000
        },
        {
          type: 'el-button',
          label: '静态数据',
          name: 'staticData',
          required: false,
          placeholder: 'px',
          relactiveDom: 'dataType',
          relactiveDomValue: 'staticData',
          value: '[{"value": 60,"name": "访问"},{"value": 40, "name": "咨询"},{"value": 20, "name": "订单"},{"value": 80,"name":"点击"},{"value":100,"name":"展现"}]',
        },
        {
          type: 'dycustComponents',
          label: '',
          name: 'dynamicData',
          required: false,
          placeholder: 'px',
          relactiveDom: 'dataType',
          chartType: 'widget-funnel',
          relactiveDomValue: 'dynamicData',
          value: '',
        },
      ],
      // 坐标
      position: [
        {
          type: 'el-input-number',
          label: '左边距',
          name: 'left',
          required: false,
          placeholder: 'px',
          value: 0,
        },
        {
          type: 'el-input-number',
          label: '上边距',
          name: 'top',
          required: false,
          placeholder: 'px',
          value: 0,
        },
        {
          type: 'el-input-number',
          label: '宽度',
          name: 'width',
          required: false,
          placeholder: '该容器在1920px大屏中的宽度',
          value: 400,
        },
        {
          type: 'el-input-number',
          label: '高度',
          name: 'height',
          required: false,
          placeholder: '该容器在1080px大屏中的高度',
          value: 200,
        },
      ],
    },
  },
  {
    code: 'widget-gauge',
    type: 'chart',
    label: '仪表盘',
    icon: 'iconyibiaopan',
    options: {
      // 配置
      setup: [
        {
          type: 'el-input-text',
          label: '图层名称',
          name: 'layerName',
          required: false,
          placeholder: '',
          value: '仪表盘',
        },
        {
          type: 'el-input-number',
          label: '刻度线粗度',
          name: 'tickMarkWeight',
          require: false,
          placeholder: '',
          value: 10,
        },
        {
          type: 'el-switch',
          label: '显示刻度值',
          name: 'showScaleValue',
          require: false,
          placeholder: '',
          value: true,
        },
        {
          type: 'el-switch',
          label: '显示刻度线',
          name: 'showTickMarks',
          require: false,
          placeholder: '',
          value: true,
        },
        {
          type: 'el-input-number',
          label: '刻度字号',
          name: 'scaleFontSize',
          require: false,
          placeholder: '',
          value: 16,
        },
        {
          type: 'el-input-number',
          label: '指标字号',
          name: 'targetFontSize',
          require: false,
          placeholder: '',
          value: 20,
        },
        {
          type: 'vue-color',
          label: '背景颜色',
          name: 'background',
          required: false,
          placeholder: '',
          value: ''
        },
      ],
      // 数据
      data: [
        {
          type: 'el-radio-group',
          label: '数据类型',
          name: 'dataType',
          require: false,
          placeholder: '',
          selectValue: true,
          selectOptions: [
            {
              code: 'staticData',
              name: '静态数据',
            },
            {
              code: 'dynamicData',
              name: '动态数据',
            },
          ],
          value: 'staticData',
        },
        {
          type: 'el-input-number',
          label: '刷新时间(毫秒)',
          name: 'refreshTime',
          relactiveDom: 'dataType',
          relactiveDomValue: 'dynamicData',
          value: 5000
        },
        {
          type: 'el-button',
          label: '静态数据',
          name: 'staticData',
          required: false,
          placeholder: 'px',
          relactiveDom: 'dataType',
          relactiveDomValue: 'staticData',
          value: '{"value": 50, "name": "名称", "unit": "%"}',
        },
        {
          type: 'dycustComponents',
          label: '',
          name: 'dynamicData',
          required: false,
          placeholder: 'px',
          relactiveDom: 'dataType',
          chartType: 'widget-gauge',
          relactiveDomValue: 'dynamicData',
          value: '',
        },
      ],
      // 坐标
      position: [
        {
          type: 'el-input-number',
          label: '左边距',
          name: 'left',
          required: false,
          placeholder: 'px',
          value: 0,
        },
        {
          type: 'el-input-number',
          label: '上边距',
          name: 'top',
          required: false,
          placeholder: 'px',
          value: 0,
        },
        {
          type: 'el-input-number',
          label: '宽度',
          name: 'width',
          required: false,
          placeholder: '该容器在1920px大屏中的宽度',
          value: 400,
        },
        {
          type: 'el-input-number',
          label: '高度',
          name: 'height',
          required: false,
          placeholder: '该容器在1080px大屏中的高度',
          value: 200,
        },
      ],
    },
  },
  {
    code: 'widget-map',
    type: 'chart',
    label: '中国地图',
    icon: 'iconzhongguoditu',
    options: {
      setup: [
        {
          type: 'el-input-text',
          label: '图层名称',
          name: 'layerName',
          required: false,
          placeholder: '',
          value: '迁徙图',
        },
      ],
      data: [],
      position: [
        {
          type: 'el-input-number',
          label: '左边距',
          name: 'left',
          required: false,
          placeholder: 'px',
          value: 0,
        },
        {
          type: 'el-input-number',
          label: '上边距',
          name: 'top',
          required: false,
          placeholder: 'px',
          value: 0,
        },
        {
          type: 'el-input-number',
          label: '宽度',
          name: 'width',
          required: false,
          placeholder: '该容器在1920px大屏中的宽度',
          value: 600,
        },
        {
          type: 'el-input-number',
          label: '高度',
          name: 'height',
          required: false,
          placeholder: '该容器在1080px大屏中的高度',
          value: 400,
        },
      ]
    }
  },
  {
    code: 'WidgetPieNightingaleRoseArea',
    type: 'chart',
    label: '南丁格尔玫瑰图',
    icon: 'iconnandinggeermeiguitu',
    options: {
      // 配置
      setup: [
        {
          type: 'el-input-text',
          label: '图层名称',
          name: 'layerName',
          required: false,
          placeholder: '',
          value: '南丁格尔玫瑰图',
        },
        {
          type: 'vue-color',
          label: '背景颜色',
          name: 'background',
          required: false,
          placeholder: '',
          value: ''
        },
        {
          type: 'el-select',
          label: '饼图模式',
          name: 'nightingleRosetype',
          required: false,
          placeholder: '',
          selectOptions: [
            {code: 'area', name: '面积模式'},
            {code: 'radius', name: '半径模式'},
          ],
          value: 'area'
        },
        [
          {
            name: '标题设置',
            list: [
              {
                type: 'el-switch',
                label: '标题',
                name: 'isNoTitle',
                required: false,
                placeholder: '',
                value: true
              },
              {
                type: 'el-input-text',
                label: '标题',
                name: 'titleText',
                required: false,
                placeholder: '',
                value: ''
              },
              {
                type: 'vue-color',
                label: '字体颜色',
                name: 'textColor',
                required: false,
                placeholder: '',
                value: '#fff'
              },
              {
                type: 'el-select',
                label: '字体粗细',
                name: 'textFontWeight',
                required: false,
                placeholder: '',
                selectOptions: [
                  {code: 'normal', name: '正常'},
                  {code: 'bold', name: '粗体'},
                  {code: 'bolder', name: '特粗体'},
                  {code: 'lighter', name: '细体'}
                ],
                value: 'normal'
              },
              {
                type: 'el-input-number',
                label: '字体大小',
                name: 'textFontSize',
                required: false,
                placeholder: '',
                value: 20
              },
              {
                type: 'el-select',
                label: '字体位置',
                name: 'textAlign',
                required: false,
                placeholder: '',
                selectOptions: [
                  {code: 'center', name: '居中'},
                  {code: 'left', name: '左对齐'},
                  {code: 'right', name: '右对齐'},
                ],
                value: 'left'
              },
              {
                type: 'el-input-text',
                label: '副标题',
                name: 'subText',
                required: false,
                placeholder: '',
                value: ''
              },
              {
                type: 'vue-color',
                label: '字体颜色',
                name: 'subTextColor',
                required: false,
                placeholder: '',
                value: ''
              },
              {
                type: 'el-select',
                label: '字体粗细',
                name: 'subTextFontWeight',
                required: false,
                placeholder: '',
                selectOptions: [
                  {code: 'normal', name: '正常'},
                  {code: 'bold', name: '粗体'},
                  {code: 'bolder', name: '特粗体'},
                  {code: 'lighter', name: '细体'}
                ],
                value: 'normal'
              },
              {
                type: 'el-input-number',
                label: '字体大小',
                name: 'subTextFontSize',
                required: false,
                placeholder: '',
                value: 12
              },
            ],
          },
          {
            name: '数值设定',
            list: [
              {
                type: 'el-switch',
                label: '显示',
                name: 'isShow',
                required: false,
                placeholder: '',
                value: true,
              },
              {
                type: 'el-switch',
                label: '数值',
                name: 'numberValue',
                require: false,
                placeholder: '',
                value: true,
              },
              {
                type: 'el-switch',
                label: '百分比',
                name: 'percentage',
                require: false,
                placeholder: '',
                value: false,
              },
              {
                type: 'el-input-number',
                label: '字体大小',
                name: 'fontSize',
                required: false,
                placeholder: '',
                value: 14,
              },
              {
                type: 'vue-color',
                label: '字体颜色',
                name: 'subTextColor',
                required: false,
                placeholder: '',
                value: ''
              },
              {
                type: 'el-select',
                label: '字体粗细',
                name: 'fontWeight',
                required: false,
                placeholder: '',
                selectOptions: [
                  {code: 'normal', name: '正常'},
                  {code: 'bold', name: '粗体'},
                  {code: 'bolder', name: '特粗体'},
                  {code: 'lighter', name: '细体'}
                ],
                value: 'normal'
              },
            ],
          },
          {
            name: '提示语设置',
            list: [
              {
                type: 'el-input-number',
                label: '字体大小',
                name: 'fontSize',
                required: false,
                placeholder: '',
                value: 12
              },
              {
                type: 'vue-color',
                label: '网格线颜色',
                name: 'lineColor',
                required: false,
                placeholder: '',
                value: ''
              },
            ],
          },
          {
            name: '图例操作',
            list: [
              {
                type: 'el-switch',
                label: '图例',
                name: 'isShowLegend',
                required: false,
                placeholder: '',
                value: true,
              },
              {
                type: 'vue-color',
                label: '字体颜色',
                name: 'lengedColor',
                required: false,
                placeholder: '',
                value: '#fff',
              },
              {
                type: 'el-input-number',
                label: '字体大小',
                name: 'lengedFontSize',
                required: false,
                placeholder: '',
                value: 16,
              },
              {
                type: 'el-input-number',
                label: '图例宽度',
                name: 'lengedWidth',
                required: false,
                placeholder: '',
                value: 15,
              },
              {
                type: 'el-select',
                label: '横向位置',
                name: 'lateralPosition',
                required: false,
                placeholder: '',
                selectOptions: [
                  {code: 'left', name: '左对齐'},
                  {code: 'right', name: '右对齐'},
                ],
                value: ''
              },
              {
                type: 'el-select',
                label: '纵向位置',
                name: 'longitudinalPosition',
                required: false,
                placeholder: '',
                selectOptions: [
                  {code: 'top', name: '顶部'},
                  {code: 'bottom', name: '底部'},
                ],
                value: ''
              },
              {
                type: 'el-select',
                label: '布局前置',
                name: 'layoutFront',
                required: false,
                placeholder: '',
                selectOptions: [
                  {code: 'vertical', name: '竖排'},
                  {code: 'horizontal', name: '横排'},
                ],
                value: ''
              },
            ],
          },
          {
            name: '自定义配色',
            list: [
              {
                type: 'customColor',
                label: '',
                name: 'customColor',
                required: false,
                value: [{color: '#FF801C'}, {color: '#F5FF46'}, {color: '#00FE65'}, {color: '#00FEFF'}, {color: '#ffa800'}]
              },
            ],
          },
        ],
      ],
      // 数据
      data: [
        {
          type: 'el-radio-group',
          label: '数据类型',
          name: 'dataType',
          require: false,
          placeholder: '',
          selectValue: true,
          selectOptions: [
            {
              code: 'staticData',
              name: '静态数据',
            },
            {
              code: 'dynamicData',
              name: '动态数据',
            },
          ],
          value: 'staticData',
        },
        {
          type: 'el-input-number',
          label: '刷新时间(毫秒)',
          name: 'refreshTime',
          relactiveDom: 'dataType',
          relactiveDomValue: 'dynamicData',
          value: 5000
        },
        {
          type: 'el-button',
          label: '静态数据',
          name: 'staticData',
          required: false,
          placeholder: 'px',
          relactiveDom: 'dataType',
          relactiveDomValue: 'staticData',
          value: '[{"value": 1048,"name": "搜索引擎"},{"value": 735, "name": "直接访问"},{"value": 580, "name": "邮件营销"},{"value": 484,"name":"联盟广告"},{"value":300,"name":"视频广告"}]',
        },
        {
          type: 'dycustComponents',
          label: '',
          name: 'dynamicData',
          required: false,
          placeholder: 'px',
          relactiveDom: 'dataType',
          chartType: 'widget-piechart',
          relactiveDomValue: 'dynamicData',
          value: '',
        },
      ],
      // 坐标
      position: [
        {
          type: 'el-input-number',
          label: '左边距',
          name: 'left',
          required: false,
          placeholder: 'px',
          value: 0,
        },
        {
          type: 'el-input-number',
          label: '上边距',
          name: 'top',
          required: false,
          placeholder: 'px',
          value: 0,
        },
        {
          type: 'el-input-number',
          label: '宽度',
          name: 'width',
          required: false,
          placeholder: '该容器在1920px大屏中的宽度',
          value: 400,
        },
        {
          type: 'el-input-number',
          label: '高度',
          name: 'height',
          required: false,
          placeholder: '该容器在1080px大屏中的高度',
          value: 200,
        },
      ],
    },
  },
  {
    code: 'widgetPiePercentageChart',
    type: 'chart',
    label: '百分比图',
    icon: 'iconbaifenbi',
    options: {
      // 配置
      setup: [
        {
          type: 'el-input-text',
          label: '图层名称',
          name: 'layerName',
          required: false,
          placeholder: '',
          value: '百分比图',
        },
        {
          type: 'vue-color',
          label: '背景颜色',
          name: 'background',
          required: false,
          placeholder: '',
          value: ''
        },
        [
          /*{
            name: '标题设置',
            list: [
              {
                type: 'el-switch',
                label: '标题',
                name: 'isNoTitle',
                required: false,
                placeholder: '',
                value: true,
              },
              {
                type: 'el-input-text',
                label: '标题',
                name: 'titleText',
                required: false,
                placeholder: '',
                value: '',
              },
              {
                type: 'vue-color',
                label: '字体颜色',
                name: 'textColor',
                required: false,
                placeholder: '',
                value: '#FFD700'
              },
              {
                type: 'el-select',
                label: '字体粗细',
                name: 'textFontWeight',
                required: false,
                placeholder: '',
                selectOptions: [
                  { code: 'normal', name: '正常' },
                  { code: 'bold', name: '粗体' },
                  { code: 'bolder', name: '特粗体' },
                  { code: 'lighter', name: '细体' }
                ],
                value: 'normal'
              },
              {
                type: 'el-input-number',
                label: '字体大小',
                name: 'textFontSize',
                required: false,
                placeholder: '',
                value: 20
              },
              {
                type: 'el-select',
                label: '字体位置',
                name: 'textAlign',
                required: false,
                placeholder: '',
                selectOptions: [
                  { code: 'center', name: '居中' },
                  { code: 'left', name: '左对齐' },
                  { code: 'right', name: '右对齐' },
                ],
                value: 'center'
              }
            ],
          },*/
          {
            name: '数值设置',
            list: [
              {
                type: 'vue-color',
                label: '数值颜色',
                name: 'textNumColor',
                required: false,
                placeholder: '',
                value: '#fff'
              },
              {
                type: 'el-input-number',
                label: '数值字体',
                name: 'textNumFontSize',
                required: false,
                placeholder: '',
                value: 40
              },
              {
                type: 'el-select',
                label: '字体粗细',
                name: 'textNumFontWeight',
                required: false,
                placeholder: '',
                selectOptions: [
                  {code: 'normal', name: '正常'},
                  {code: 'bold', name: '粗体'},
                  {code: 'bolder', name: '特粗体'},
                  {code: 'lighter', name: '细体'}
                ],
                value: 'normal'
              },
              {
                type: 'vue-color',
                label: '%号颜色',
                name: 'textPerColor',
                required: false,
                placeholder: '',
                value: '#fff'
              },
              {
                type: 'el-input-number',
                label: '%号字体',
                name: 'textPerFontSize',
                required: false,
                placeholder: '',
                value: 20
              },
              {
                type: 'el-select',
                label: '字体粗细',
                name: 'textPerFontWeight',
                required: false,
                placeholder: '',
                selectOptions: [
                  {code: 'normal', name: '正常'},
                  {code: 'bold', name: '粗体'},
                  {code: 'bolder', name: '特粗体'},
                  {code: 'lighter', name: '细体'}
                ],
                value: 'normal'
              }
            ],
          },
          {
            name: '圆环设置',
            list: [
/*              {
                type: 'vue-color',
                label: '0%处',
                name: 'colorStart',
                required: false,
                placeholder: '',
                value: '#4FADFD'
              },
              {
                type: 'vue-color',
                label: '100%处',
                name: 'colorEnd',
                required: false,
                placeholder: '',
                value: '#28E8FA'
              },*/
              {
                type: 'el-input-number',
                label: '刻度数量',
                name: 'lineNumber',
                required: false,
                placeholder: '',
                value: 8
              },
              {
                type: 'el-input-number',
                label: '刻度长度',
                name: 'lineLength',
                required: false,
                placeholder: '',
                value: 15
              },
              {
                type: 'el-input-number',
                label: '刻度宽度',
                name: 'lineWidth',
                required: false,
                placeholder: '',
                value: 5
              },
              {
                type: 'vue-color',
                label: '刻度颜色',
                name: 'lineColor',
                required: false,
                placeholder: '',
                value: '#061740'
              },
            ]
          },
          /*{
            name: '图例操作',
            list: [
              {
                type: 'el-switch',
                label: '图例',
                name: 'isShowLegend',
                required: false,
                placeholder: '',
                value: true,
              },
              {
                type: 'vue-color',
                label: '字体颜色',
                name: 'lengedColor',
                required: false,
                placeholder: '',
                value: '#fff',
              },
              {
                type: 'el-input-number',
                label: '字体大小',
                name: 'lengedFontSize',
                required: false,
                placeholder: '',
                value: 16,
              },
              {
                type: 'el-input-number',
                label: '图例宽度',
                name: 'lengedWidth',
                required: false,
                placeholder: '',
                value: 15,
              },
              {
                type: 'el-select',
                label: '横向位置',
                name: 'lateralPosition',
                required: false,
                placeholder: '',
                selectOptions: [
                  { code: 'left', name: '左对齐' },
                  { code: 'right', name: '右对齐' },
                ],
                value: ''
              },
              {
                type: 'el-select',
                label: '纵向位置',
                name: 'longitudinalPosition',
                required: false,
                placeholder: '',
                selectOptions: [
                  { code: 'top', name: '顶部' },
                  { code: 'bottom', name: '底部' },
                ],
                value: ''
              },
              {
                type: 'el-select',
                label: '布局前置',
                name: 'layoutFront',
                required: false,
                placeholder: '',
                selectOptions: [
                  { code: 'vertical', name: '竖排' },
                  { code: 'horizontal', name: '横排' },
                ],
                value: ''
              },
            ],
          },*/
        ],
      ],
      // 数据
      data: [
        {
          type: 'el-radio-group',
          label: '数据类型',
          name: 'dataType',
          require: false,
          placeholder: '',
          selectValue: true,
          selectOptions: [
            {
              code: 'staticData',
              name: '静态数据',
            },
            {
              code: 'dynamicData',
              name: '动态数据',
            },
          ],
          value: 'staticData',
        },
        {
          type: 'el-input-number',
          label: '刷新时间(毫秒)',
          name: 'refreshTime',
          relactiveDom: 'dataType',
          relactiveDomValue: 'dynamicData',
          value: 5000
        },
        {
          type: 'el-button',
          label: '静态数据',
          name: 'staticData',
          required: false,
          placeholder: 'px',
          relactiveDom: 'dataType',
          relactiveDomValue: 'staticData',
          value: 60,
        },
        {
          type: 'dycustComponents',
          label: '',
          name: 'dynamicData',
          required: false,
          placeholder: 'px',
          relactiveDom: 'dataType',
          chartType: 'widget-piechart',
          relactiveDomValue: 'dynamicData',
          value: '',
        },
      ],
      // 坐标
      position: [
        {
          type: 'el-input-number',
          label: '左边距',
          name: 'left',
          required: false,
          placeholder: 'px',
          value: 0,
        },
        {
          type: 'el-input-number',
          label: '上边距',
          name: 'top',
          required: false,
          placeholder: 'px',
          value: 0,
        },
        {
          type: 'el-input-number',
          label: '宽度',
          name: 'width',
          required: false,
          placeholder: '该容器在1920px大屏中的宽度',
          value: 400,
        },
        {
          type: 'el-input-number',
          label: '高度',
          name: 'height',
          required: false,
          placeholder: '该容器在1080px大屏中的高度',
          value: 200,
        },
      ],
    },
  },
  {
    code: 'widgetAirBubbleMap',
    type: 'chart',
    label: '气泡地图',
    icon: 'iconzhongguoditu',
    options: {
      // 配置
      setup: [
        {
          type: 'el-input-text',
          label: '图层名称',
          name: 'layerName',
          required: false,
          placeholder: '',
          value: '气泡地图',
        },
        {
          type: 'vue-color',
          label: '背景颜色',
          name: 'background',
          required: false,
          placeholder: '',
          value: '#0F1C3C'
        },
        [
          {
            name: '标题设置',
            list: [
              {
                type: 'el-switch',
                label: '标题',
                name: 'isNoTitle',
                required: false,
                placeholder: '',
                value: true
              },
              {
                type: 'el-input-text',
                label: '标题',
                name: 'titleText',
                required: false,
                placeholder: '',
                value: ''
              },
              {
                type: 'vue-color',
                label: '字体颜色',
                name: 'textColor',
                required: false,
                placeholder: '',
                value: '#fff'
              },
              {
                type: 'el-select',
                label: '字体粗细',
                name: 'textFontWeight',
                required: false,
                placeholder: '',
                selectOptions: [
                  {code: 'normal', name: '正常'},
                  {code: 'bold', name: '粗体'},
                  {code: 'bolder', name: '特粗体'},
                  {code: 'lighter', name: '细体'}
                ],
                value: 'normal'
              },
              {
                type: 'el-input-number',
                label: '字体大小',
                name: 'textFontSize',
                required: false,
                placeholder: '',
                value: 20
              },
              {
                type: 'el-select',
                label: '字体位置',
                name: 'textAlign',
                required: false,
                placeholder: '',
                selectOptions: [
                  {code: 'center', name: '居中'},
                  {code: 'left', name: '左对齐'},
                  {code: 'right', name: '右对齐'},
                ],
                value: 'left'
              },
              {
                type: 'el-input-text',
                label: '副标题',
                name: 'subText',
                required: false,
                placeholder: '',
                value: ''
              },
              {
                type: 'vue-color',
                label: '字体颜色',
                name: 'subTextColor',
                required: false,
                placeholder: '',
                value: ''
              },
              {
                type: 'el-select',
                label: '字体粗细',
                name: 'subTextFontWeight',
                required: false,
                placeholder: '',
                selectOptions: [
                  {code: 'normal', name: '正常'},
                  {code: 'bold', name: '粗体'},
                  {code: 'bolder', name: '特粗体'},
                  {code: 'lighter', name: '细体'}
                ],
                value: 'normal'
              },
              {
                type: 'el-input-number',
                label: '字体大小',
                name: 'subTextFontSize',
                required: false,
                placeholder: '',
                value: 12
              },
            ],
          },
          {
            name: '字体设置',
            list: [
              {
                type: 'el-input-number',
                label: '文字大小',
                name: 'fontTextSize',
                required: false,
                placeholder: '',
                value: 15,
              },
              {
                type: 'vue-color',
                label: '文字颜色',
                name: 'fontTextColor',
                required: false,
                placeholder: '',
                value: '#D4EEFF'
              },
              {
                type: 'el-select',
                label: '文字粗细',
                name: 'fontTextWeight',
                required: false,
                placeholder: '',
                selectOptions: [
                  {code: 'normal', name: '正常'},
                  {code: 'bold', name: '粗体'},
                  {code: 'bolder', name: '特粗体'},
                  {code: 'lighter', name: '细体'}
                ],
                value: 'normal'
              },
              {
                type: 'el-input-number',
                label: '数值大小',
                name: 'fontDataSize',
                required: false,
                placeholder: '',
                value: 15,
              },
              {
                type: 'vue-color',
                label: '数值颜色',
                name: 'fontDataColor',
                required: false,
                placeholder: '',
                value: '#D4EEFF'
              },
              {
                type: 'el-select',
                label: '数值粗细',
                name: 'fontDataWeight',
                required: false,
                placeholder: '',
                selectOptions: [
                  {code: 'normal', name: '正常'},
                  {code: 'bold', name: '粗体'},
                  {code: 'bolder', name: '特粗体'},
                  {code: 'lighter', name: '细体'}
                ],
                value: 'normal'
              },
            ],
          },
          {
            name: '气泡设置',
            list: [
              {
                type: 'el-input-number',
                label: '最小半径',
                name: 'fontminSize4Pin',
                required: false,
                placeholder: '',
                value: 20,
              },
              {
                type: 'el-input-number',
                label: '最大半径',
                name: 'fontmaxSize4Pin',
                required: false,
                placeholder: '',
                value: 100,
              },
              /*{
                type: 'vue-color',
                label: '气泡颜色',
                name: 'fontPieColor',
                required: false,
                placeholder: '',
                value: ''
              },*/
            ],
          },
          {
            name: '地图块颜色',
            list: [
              {
                type: 'vue-color',
                label: '0%处颜色',
                name: 'font0PreColor',
                required: false,
                placeholder: '',
                value: '#073684'
              },
              {
                type: 'vue-color',
                label: '100%颜色',
                name: 'font100PreColor',
                required: false,
                placeholder: '',
                value: '#061E3D'
              },
              {
                type: 'vue-color',
                label: '高亮渐变色',
                name: 'fontHighlightColor',
                required: false,
                placeholder: '',
                value: '#2B91B7'
              },
            ],
          },
        ],
      ],
      data: [
        {
          type: 'el-radio-group',
          label: '数据类型',
          name: 'dataType',
          require: false,
          placeholder: '',
          selectValue: true,
          selectOptions: [
            {
              code: 'staticData',
              name: '静态数据',
            },
            {
              code: 'dynamicData',
              name: '动态数据',
            },
          ],
          value: 'staticData',
        },
        {
          type: 'el-input-number',
          label: '刷新时间(毫秒)',
          name: 'refreshTime',
          relactiveDom: 'dataType',
          relactiveDomValue: 'dynamicData',
          value: 5000
        },
        {
          type: 'el-button',
          label: '静态数据',
          name: 'staticData',
          required: false,
          placeholder: 'px',
          relactiveDom: 'dataType',
          relactiveDomValue: 'staticData',
          value: [
            {"name":"南海诸岛","value":1},
            {"name":"北京","value":524},
            {"name":"天津","value":14},
            {"name":"上海","value":150},
            {"name":"重庆","value":75},
            {"name":"河北","value":13},
            {"name":"河南","value":83},
            {"name":"云南","value":11},
            {"name":"辽宁","value":19},
            {"name":"黑龙江","value":15},
            {"name":"湖南","value":69},
            {"name":"安徽","value":260},
            {"name":"山东","value":39},
            {"name":"新疆","value":4},
            {"name":"江苏","value":31},
            {"name":"浙江","value":104},
            {"name":"江西","value":36},
            {"name":"湖北","value":1052},
            {"name":"广西","value":33},
            {"name":"甘肃","value":347},
            {"name":"山西","value":8},
            {"name":"内蒙古","value":157},
            {"name":"陕西","value":22},
            {"name":"吉林","value":4},
            {"name":"福建","value":36},
            {"name":"贵州","value":39},
            {"name":"广东","value":996},
            {"name":"青海","value":27},
            {"name":"西藏","value":31},
            {"name":"四川","value":46},
            {"name":"宁夏","value":16},
            {"name":"海南","value":22},
            {"name":"台湾","value":6},
            {"name":"香港","value":2},
            {"name":"澳门","value":9}],
        },
        {
          type: 'dycustComponents',
          label: '',
          name: 'dynamicData',
          required: false,
          placeholder: 'px',
          relactiveDom: 'dataType',
          chartType: 'widget-piechart',
          relactiveDomValue: 'dynamicData',
          value: '',
        },
      ],
      position: [
        {
          type: 'el-input-number',
          label: '左边距',
          name: 'left',
          required: false,
          placeholder: 'px',
          value: 0,
        },
        {
          type: 'el-input-number',
          label: '上边距',
          name: 'top',
          required: false,
          placeholder: 'px',
          value: 0,
        },
        {
          type: 'el-input-number',
          label: '宽度',
          name: 'width',
          required: false,
          placeholder: '该容器在1920px大屏中的宽度',
          value: 600,
        },
        {
          type: 'el-input-number',
          label: '高度',
          name: 'height',
          required: false,
          placeholder: '该容器在1080px大屏中的高度',
          value: 400,
        },
      ]
    }
  },
]

const getToolByCode = function (code) {
  // 获取大屏底层设置属性
  if (code == 'screen') {
    return screenConfig
  }
  // 获取组件
  var item = widgetTools.find(function (item, index, arrs) {
    return item.code === code
  })
  return item
}

export {widgetTools, getToolByCode}
