function loadDefaultPageSize() {
    console.log('Loading the default page size...');
    return 20;
}

const savedPageSize = 50;
const missingPageSize = null;

console.log(savedPageSize ?? loadDefaultPageSize()); // 50
console.log(missingPageSize ?? loadDefaultPageSize());
// Loading the default page size...
// 20
