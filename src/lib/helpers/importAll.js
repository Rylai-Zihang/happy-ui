// reference: https://juejin.cn/post/6844903517564436493#heading-9
let importAll = (requireContext) => requireContext.keys().forEach(requireContext)
try {
    importAll(require.context('../../icons/', true, /\.svg$/))
} catch (error) {
    console.log(error)
}