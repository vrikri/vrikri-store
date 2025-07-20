function buyNow(upiId) {
    window.location.href = 'upi://pay?pa=' + upiId + '&pn=Vrikri&cu=INR';
}
