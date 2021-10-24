<template>
    <div>
        <table style="width:100%">
            <tr>
                <th></th>
                <th>Texts</th>
            </tr>
            <tr>
                <td>Papyri</td>
                <!-- <td>{{this.getAlexandrianPapyri()}}</td> -->
            </tr>
            <tr>
                <td>Uncials</td>
                <!-- <td>{{this.getAlexandrianUncials()}}</td> -->
            </tr>
             <tr>
                <td>Minuscules</td>
                <!-- <td>{{this.getAlexandrianMinuscules()}}</td> -->
            </tr>
             <tr>
                <td>Lectionaries</td>
                <!-- <td>{{this.getAlexandrianLectionaries()}}</td> -->
            </tr>
             <tr>
                <td>Versions</td>
                <!-- <td>{{this.getAlexandrianVersions()}}</td> -->
            </tr>
             <tr>
                <td>Fathers</td>
                <!-- <td>{{this.getAlexandrianFathers()}}</td> -->
            </tr>
            </table>
         <span><router-link to="245/texts">See all Texts for this Reference</router-link></span>
        <router-link to="texts/1">See this Text</router-link>
        <router-view></router-view> <!--need to properly render child component-->
    </div>
</template>
