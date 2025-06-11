npm- Node Package Manager
work same as anchor tag(canot refreash whole page, it is only rendering specific part)

Why we use Query parameter(v)??
to identify the video id
/watch?v=123456---> query parameter or search parameter hook=useSearchParams
/watch/123456-----> id parameter hook= useParams

{} Why we used??  there are two part import and export
        import--> default import (default keyword is used) & named import({}--> is used)
        export--> default export(default keyword is used) & named export({}--> is used)
once a time 'default export' is used
multiple time 'named export' is used


Project Features discussion

1.We will build 2Pages
    > Landing Page
    > Watch Page

2.Components
    >Cards
    >Button
    >SideBarItems
    >Head
    >MainContainer
    >SideBar

3.Component Tree
   
    >Head
        -Hamburger
        -Logo
        -SearchBar
        -UserIcon
    >MainContainer
        -SideBar
            -SideBarItems
        -Button
        -Cards