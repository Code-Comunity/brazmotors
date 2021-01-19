const sidebarGroups = require('../../../utils/sideBars')

module.exports = {
    options: {
        properties: {
          data: {
            isVisible: { edit: false , list: true , show: true , filter: false}
          },
          mensagem:{
            type: 'richtext',
          },
        },     
        actions:{
          edit:{isVisible: false},
          new:{isVisible: false} 
        },
        parent: sidebarGroups.email
      },
     
}