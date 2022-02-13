module.exports = {
    title: "Windows XP Theme", 
    summary: "Windows XP Theme",
    author: "Gio",
    modVersion: 0.1,

    // Themes definied via themes will be automatically scoped
    // and options created
    themes: [
        {
            label: "Windows XP",
            source: "./theme.scss"
        }
    ],

    trees: {
        "./": "assets://mod/winXP/"
    }
}
