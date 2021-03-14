const AdminBro = require("admin-bro");
const sidebarGroups = require('../../../utils/sideBars')

module.exports = {
  options: {
    properties: {
      imagem: {
        components: {
          edit: AdminBro.bundle('./SlideImgComponent/UploadFiles.tsx')
        },
      },
    },
  },
}