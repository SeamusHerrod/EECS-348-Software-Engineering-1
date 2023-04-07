<!DOCTYPE html>
<html>
<head>
    Practice 4
</head>
<body>
    
    <div align="center">
        <table border="2">
            <tr>
                <th>0</th>
                <?php
                    for ( $i = 1; $i <= 10; $i++ ){
                        echo '<th>' .$i. '</th>';
                    }
                ?>
            </tr>
            <?php
                for ( $j = 1; $j <= 10; j++){
                    echo '<tr> 
                        <th>' .$j. '</th>';
                    for( $x = 1; $x <= 10; $x++){
                        $ans = $j * $x;
                        echo "<td>" .$ans. "</td>"
                    }
                }
            ?>
        </table>
    </div>

</body>


</html>