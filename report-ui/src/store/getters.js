import cacheView from "./modules/cachaView"

const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.user.token,
  accessUser: state => state.user.accessUser,
  cacheViews: state => state.cacheView.cacheViews
}
export default getters
