(function (window) {
    var document = window.document;
    var STORAGE_KEY = 'savedContent#';
    var editTimeoutId;

   
    function onEdit(event) {
        var element = event.currentTarget;
        clearTimeout(editTimeoutId);
        editTimeoutId = setTimeout(function () {
            var content = element.innerHTML;
            localStorage.setItem(STORAGE_KEY + element.id, content);
        }, 500);
    }

    
    function restore(element) {
        if (!element.id.length) {
            return;
        }
        var savedContent = localStorage.getItem(STORAGE_KEY + element.id);
        if (savedContent) {
            element.innerHTML = savedContent;
        }
    }

    
    document.addEventListener("DOMContentLoaded", function(event) {
        // Find all [contenteditable] elements.
        var editables = document.querySelectorAll('[contenteditable]');
        for (var i = 0; i < editables.length; i++) {
            var element = editables[i];
            var id = element.id;
        
            if (!id.length) {
                break;
            }

          
            element.addEventListener('input', onEdit);

          
            restore(element);
        }
    });
})(this);
