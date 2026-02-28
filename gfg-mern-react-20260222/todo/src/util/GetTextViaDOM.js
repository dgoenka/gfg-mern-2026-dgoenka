export function getTextViaDOM() {
    const mainEntryDomRef = document.getElementById(this.id);
    console.log(mainEntryDomRef.innerHTML);
    return mainEntryDomRef.innerHTML;
}