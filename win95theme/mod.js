module.exports = {
    title: "Windows 95 Theme", 
    summary: "Windows 95 Theme",
    author: "Gio",
    modVersion: 0.1,

    // Themes definied via themes will be automatically scoped
    // and options created
    themes: [
        {
            label: "Windows 98",
            source: "./theme.scss"
        }
    ],

    trees: {
        "./": "assets://mod/win95/"
    }
}
