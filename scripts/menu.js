export default function slide() {
    this.nextElementSibling.classList.toggle('active');
    this.classList.toggle('highlighted');
    const sign = this.childNodes[1].childNodes[1];
    sign.classList.toggle('sign-open');
}