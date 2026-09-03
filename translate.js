function Translate()
{
    let currentPage = window.location.href;

    letTranslateURL = 
        "https://translate.google.com/translate?sl=auto&tl=en&u="
        + currentPage;

    window.location.href = letTranslateURL;
}