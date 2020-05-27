export default {
  $schema: 'https://houtai.baidu.com/v2/schemas/page.json#',
  title: 'Transfer 穿梭器 示例',
  body: [
    {
      type: 'form',
      title: '',
      mode: 'horizontal',
      actions: [
        {
          type: 'submit',
          label: '提交'
        }
      ],
      controls: [
        {
          label: '默认',
          type: 'transfer',
          name: 'transfer1',
          // showArrow: true,
          options: [
            {
              label: '诸葛亮',
              value: 'zhugeliang'
            },
            {
              label: '曹操',
              value: 'caocao'
            },
            {
              label: '钟无艳',
              value: 'zhongwuyan'
            },
            {
              label: '李白',
              value: 'libai'
            },
            {
              label: '韩信',
              value: 'hanxin'
            },
            {
              label: '云中君',
              value: 'yunzhongjun'
            }
          ]
        },
        {
          label: '分组',
          type: 'transfer',
          name: 'transfer2',
          options: [
            {
              label: '法师',
              children: [
                {
                  label: '诸葛亮',
                  value: 'zhugeliang'
                }
              ]
            },
            {
              label: '战士',
              children: [
                {
                  label: '曹操',
                  value: 'caocao'
                },
                {
                  label: '钟无艳',
                  value: 'zhongwuyan'
                }
              ]
            },
            {
              label: '打野',
              children: [
                {
                  label: '李白',
                  value: 'libai'
                },
                {
                  label: '韩信',
                  value: 'hanxin'
                },
                {
                  label: '云中君',
                  value: 'yunzhongjun'
                }
              ]
            }
          ]
        },
        {
          label: '表格形式',
          type: 'transfer',
          name: 'transfer3',
          selectMode: 'table',
          columns: [
            {
              name: 'label',
              label: '英雄'
            },
            {
              name: 'position',
              label: '位置'
            }
          ],
          options: [
            {
              label: '诸葛亮',
              value: 'zhugeliang',
              position: '中单'
            },
            {
              label: '曹操',
              value: 'caocao',
              position: '上单'
            },
            {
              label: '钟无艳',
              value: 'zhongwuyan',
              position: '上单'
            },
            {
              label: '李白',
              value: 'libai',
              position: '打野'
            },
            {
              label: '韩信',
              value: 'hanxin',
              position: '打野'
            },
            {
              label: '云中君',
              value: 'yunzhongjun',
              position: '打野'
            }
          ]
        },

        {
          label: '树型展示',
          type: 'transfer',
          name: 'transfer4',
          selectMode: 'tree',
          options: [
            {
              label: '法师',
              children: [
                {
                  label: '诸葛亮',
                  value: 'zhugeliang'
                }
              ]
            },
            {
              label: '战士',
              children: [
                {
                  label: '曹操',
                  value: 'caocao'
                },
                {
                  label: '钟无艳',
                  value: 'zhongwuyan'
                }
              ]
            },
            {
              label: '打野',
              children: [
                {
                  label: '李白',
                  value: 'libai'
                },
                {
                  label: '韩信',
                  value: 'hanxin'
                },
                {
                  label: '云中君',
                  value: 'yunzhongjun'
                }
              ]
            }
          ]
        },

        {
          label: '级联选择',
          type: 'transfer',
          name: 'transfer5',
          selectMode: 'chained',
          options: [
            {
              label: '法师',
              children: [
                {
                  label: '诸葛亮',
                  value: 'zhugeliang'
                }
              ]
            },
            {
              label: '战士',
              children: [
                {
                  label: '曹操',
                  value: 'caocao'
                },
                {
                  label: '钟无艳',
                  value: 'zhongwuyan'
                }
              ]
            },
            {
              label: '打野',
              children: [
                {
                  label: '李白',
                  value: 'libai'
                },
                {
                  label: '韩信',
                  value: 'hanxin'
                },
                {
                  label: '云中君',
                  value: 'yunzhongjun'
                }
              ]
            }
          ]
        },

        {
          label: '带搜索',
          type: 'transfer',
          name: 'transfer6',
          selectMode: 'chained',
          searchable: true,
          sortable: true,
          options: [
            {
              label: '法师',
              children: [
                {
                  label: '诸葛亮',
                  value: 'zhugeliang'
                }
              ]
            },
            {
              label: '战士',
              children: [
                {
                  label: '曹操',
                  value: 'caocao'
                },
                {
                  label: '钟无艳',
                  value: 'zhongwuyan'
                }
              ]
            },
            {
              label: '打野',
              children: [
                {
                  label: '李白',
                  value: 'libai'
                },
                {
                  label: '韩信',
                  value: 'hanxin'
                },
                {
                  label: '云中君',
                  value: 'yunzhongjun'
                }
              ]
            }
          ]
        },

        {
          label: '组合穿梭器',
          type: 'tabs-transfer',
          name: 'a',
          sortable: true,
          selectMode: 'tree',
          searchable: true,
          options: [
            {
              label: '成员',
              selectMode: 'tree',
              children: [
                {
                  label: '法师',
                  children: [
                    {
                      label: '诸葛亮',
                      value: 'zhugeliang'
                    }
                  ]
                },
                {
                  label: '战士',
                  children: [
                    {
                      label: '曹操',
                      value: 'caocao'
                    },
                    {
                      label: '钟无艳',
                      value: 'zhongwuyan'
                    }
                  ]
                },
                {
                  label: '打野',
                  children: [
                    {
                      label: '李白',
                      value: 'libai'
                    },
                    {
                      label: '韩信',
                      value: 'hanxin'
                    },
                    {
                      label: '云中君',
                      value: 'yunzhongjun'
                    }
                  ]
                }
              ]
            },

            {
              label: '用户',
              selectMode: 'chained',
              children: [
                {
                  label: '法师',
                  children: [
                    {
                      label: '诸葛亮',
                      value: 'zhugeliang2'
                    }
                  ]
                },
                {
                  label: '战士',
                  children: [
                    {
                      label: '曹操',
                      value: 'caocao2'
                    },
                    {
                      label: '钟无艳',
                      value: 'zhongwuyan2'
                    }
                  ]
                },
                {
                  label: '打野',
                  children: [
                    {
                      label: '李白',
                      value: 'libai2'
                    },
                    {
                      label: '韩信',
                      value: 'hanxin2'
                    },
                    {
                      label: '云中君',
                      value: 'yunzhongjun2'
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
