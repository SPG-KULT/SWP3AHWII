<html>
    <head>
            <title>Zufallszahlengenerator</title>
            
    
    </head>
    <body>
        <h1>Zufallszahlengenerator</h1>

        <form action="random()" method="get">
            Untere Grenze: <input type="number" name="untereGrenze" id="1"> <br>
            Obere Grenze:  <input type="number" name="obereGrenze" id="2"> <br>
            <input type="submit" name="submit" >

            <?php 

            function random() {
                
                $untereGrenze = $_GET['untereGrenze'];
                $obereGrenze = $_GET['obereGrenze'];
                $Zahl = rand($untereGrenze, $obereGrenze);
                echo $Zahl;
            }

            ?>
        </form>
    </body>


</html>