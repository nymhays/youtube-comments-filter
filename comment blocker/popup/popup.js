(function() {
    chrome.storage.local.get('blockedWords', function (result) {
        if (result.blockedWords != undefined) {
            setTimeout(function(){document.getElementById("blockedWords").value = result.blockedWords}, 500);
        }
    });

})();

const updateWords = () => {
    let words = document.getElementById("blockedWords").value;
    //chrome.extension.getBackgroundPage().console.log(`wordss: ${words}`);
    chrome.storage.local.set({blockedWords: words});
};

window.addEventListener('load', function load(event){
    let updateBtn = document.getElementById('updateBtn');
    updateBtn.addEventListener('click', function() { updateWords() });
});