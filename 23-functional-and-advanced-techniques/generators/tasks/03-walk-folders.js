// Task 3: Every file in a project
// Lecture: Generators (function*)
//
// A project folder holds files and folders, and folders can nest to any depth. Write the
// recursive generator function filePaths(folder, parent). folder is
// { name, files, folders }, where files is an array of file names and folders an array of
// more folders (either array may be missing). It yields the full path of every file,
// folder name first: first the files of the folder itself, then, folder by folder, all
// the paths inside each subfolder. Use yield* for the subfolders. parent is the path of
// the folder above; we leave it out at the top, so the top folder's files are
// 'src/app.js'.
//
// Examples:
//   const lib = { name: 'lib', files: ['cart.js'] };
//   const src = { name: 'src', files: ['app.js'], folders: [lib] };
//   [...filePaths(src)]    // ['src/app.js', 'src/lib/cart.js']
//
// Run the tests: npm test -- 23-functional-and-advanced-techniques/generators

export function* filePaths(folder, parent) {
    // Your code here
}
