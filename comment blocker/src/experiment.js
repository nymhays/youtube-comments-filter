chrome.storage.local.get('blockedWords', function (result) {
    blackListed = result.blockedWords.split(', ');
});
chrome.storage.local.get('maxLength', function (result) {
    limit = result.maxLength;
});
function deleteComments() {
    var rootParent;
    var textBoxes = document.querySelectorAll('[id^=content-text');

    for(var i in textBoxes) {

        try {

            textContent = textBoxes[i].textContent.toLowerCase();
            initParent = textBoxes[i].parentNode;
            rootParent = initParent.parentNode;

            for(i = 0; i <= 3; i++) {
                rootParent = rootParent.parentNode;
            };
    
            blackListed.forEach((item, index) => {
                if(item == '' || item == null) {
                    return;
                };

                if (textContent.includes(item.toLowerCase()) && textContent.length < limit  ) {
                    rootParent.remove();
                };
                
            });
        }
    
        catch(error) {
            console.log(error);
        };
    };
};

setInterval(function() {deleteComments()}, 3000);