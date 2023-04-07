<?php
if (isset($_POST['number'])){
    echo "table";
    num = $_POST['number'];
    for ( $i; $i<= $num; $i++ )
    {
        echo "<tr>";
        for ( $j = 1; $j <= $num; $j++ )
        {
            echo "<td>" .($i * $j). "</td>";
        }
        echo "</tr>";
    }
    echo "</table>";
}

?>