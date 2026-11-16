const obj = {
    value: 42,
    show() {
        const inner = () => console.log(this.value);
        inner(); // 42
    }
};

obj.show();
