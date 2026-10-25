(function(){
  var btn=document.getElementById('copyBtn'), toast=document.getElementById('toast'), email=document.getElementById('email');
  function selectEmail(){ var r=document.createRange(); r.selectNodeContents(email); var s=window.getSelection(); s.removeAllRanges(); s.addRange(r); }
  btn.addEventListener('click', function(){
    var text=email.textContent.trim();
    try{
      navigator.clipboard.writeText(text).then(function(){ toast.textContent='Copied. Paste it into your email app.'; },
        function(){ selectEmail(); toast.textContent='Email selected. Press Ctrl+C (or ⌘+C) to copy.'; });
    }catch(e){ selectEmail(); toast.textContent='Email selected. Press Ctrl+C (or ⌘+C) to copy.'; }
  });
})();
