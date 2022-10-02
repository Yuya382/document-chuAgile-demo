<template>
    <div>
        <table>
            <thead>
                <tr>
                    <th></th>
                    <th style="text-align: center;"></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>最終編集日</td>
                    <td style="text-align: center;">
                        {{this.$page.lastUpdated}}
                    </td>
                </tr>
                <tr>
                    <td>作成者</td>
                    <td style="text-align: center;">
                        {{this.$page.git.author}}
                    </td>
                </tr>

                <tr>
                    <td>最終更新者</td>
                    <td style="text-align: center;">
                        {{this.$page.git.contributors[this.$page.git.contributors.length -1]}}
                    </td>
                </tr>


            </tbody>
        </table>
    </div>
</template>


