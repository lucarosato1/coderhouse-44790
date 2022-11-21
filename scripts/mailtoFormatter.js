function getContent() {
    const receiver = "rosato.dev@gmail.com";

    let selector = document.getElementById('form--subject');
    let subject = selector.options[selector.selectedIndex].text;
    let body = document.getElementById('form--body').value;

    window.open(`mailto:${receiver}?subject=${subject}&body=${body}`);
}