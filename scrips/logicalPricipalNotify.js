$('body').on("keydown", function (e) {
    if (e.ctrlKey && e.shiftKey && e.which === 82) {
        M.toast({html: 'Hola esto lo hizo yenny y ronald Saludos :3'})
        e.preventDefault();
    }
    if (e.ctrlKey && e.shiftKey && e.which === 89) {
        M.toast({html: 'Hola esto lo hizo yenny y ronald Saludos :3'})
        e.preventDefault();
    }
});
$("#button").on("click", function (e) {
    M.toast({html: 'I am a toast!'})
}); yyy