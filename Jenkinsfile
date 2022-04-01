
pipeline{
    agent any
    parameters {
        booleanParam(name: 'CLIENTE_SA', defaultValue: false, description: 'Cliente flag')
        booleanParam(name: 'EQUIPO_SA', defaultValue: false, description: 'Equipo flag')
        booleanParam(name: 'PARTIDO_SA', defaultValue: false, description: 'Partido flag')
        booleanParam(name: 'COMPETENCIA_SA', defaultValue: false, description: 'Competencia flag')
        booleanParam(name: 'ESTADIO_SA', defaultValue: false, description: 'Estadio flag')
        booleanParam(name: 'DIRECTOR_SA', defaultValue: false, description: 'Director flag')
        booleanParam(name: 'JUGADOR_SA', defaultValue: false, description: 'Jugador flag')
        booleanParam(name: 'NOTICIA_SA', defaultValue: false, description: 'Noticia flag')
        booleanParam(name: 'PREDICCION_SA', defaultValue: false, description: 'Prediccion flag')
        booleanParam(name: 'AUTENTICACION_SA', defaultValue: false, description: 'Autenticacion flag')
        booleanParam(name: 'ADMINISTRADOR_SA', defaultValue: false, description: 'Administrador flag')
        booleanParam(name: 'EMPLEADO_SA', defaultValue: false, description: 'Empleado flag')
        booleanParam(name: 'PAIS_SA', defaultValue: false, description: 'Pais flag')
    }
    stages {
        stage("Start"){
            steps{
                    script {
                    def changeLogSets = currentBuild.changeSets
                    for (int i = 0; i < changeLogSets.size(); i++) {
                        def entries = changeLogSets[i].items
                        for (int j = 0; j < entries.length; j++) {
                            def entry = entries[j]
                            def files = new ArrayList(entry.affectedFiles)
                            for (int k = 0; k < files.size(); k++) {
                                def file = files[k]
                                if(file.path.contains("client")){
                                    params.CLIENTE_SA = true
                                }
                                else if(file.path.contains("equipo")){
                                    params.EQUIPO_SA = true
                                }
                                else if(file.path.contains("partido")){
                                    params.PARTIDO_SA = true
                                }
                                else if(file.path.contains("competicion")){
                                    params.COMPETENCIA_SA = true
                                }
                                else if(file.path.contains("estadio")){
                                    params.ESTADIO_SA = true
                                }
                                else if(file.path.contains("tecnico")){
                                    params.DIRECTOR_SA = true
                                }
                                else if(file.path.contains("jugador")){
                                    params.JUGADOR_SA = true
                                }
                                else if(file.path.contains("noticia")){
                                    params.NOTICIA_SA = true
                                }
                                else if(file.path.contains("predict")){
                                    params.PREDICCION_SA = true
                                }
                                else if(file.path.contains("autenticacion")){
                                    params.AUTENTICACION_SA = true
                                }
                                else if(file.path.contains("administrative")){
                                    params.ADMINISTRADOR_SA = true
                                }
                                else if(file.path.contains("empleado")){
                                    params.EMPLEADO_SA = true
                                }
                                else if(file.path.contains("pais")){
                                    params.PAIS_SA = true
                                }
                            }
                        }
                    }
                } 
                    sh 'echo "${params.CLIENTE_SA}"'
            }          
        }
        stage("build client"){
            when{ expression { return params.CLIENTE_SA } }
            steps{
                dir("SoccerStats"){
                    sh 'echo "Hubo cambios en cliente"'
                }
            }
        }
        stage("build equipo"){
            when{ expression { return params.EQUIPO_SA } }
            steps{
                dir("SoccerStats"){
                    sh 'echo "Hubo cambios en equipo"'
                }
            }
        }
        stage("build partido"){
            when{ expression { return params.PARTIDO_SA } }
            steps{
                dir("SoccerStats"){
                    sh 'echo "Hubo cambios en partido"'
                }
            }
        }
        stage("build competencia"){
            when{ expression { return params.COMPETENCIA_SA } }
            steps{
                dir("SoccerStats"){
                    sh 'echo "Hubo cambios en competencia"'
                }
            }
        }
        stage("build estadio"){
            when{ expression { return params.ESTADIO_SA } }
            steps{
                dir("SoccerStats"){
                    sh 'echo "Hubo cambios en estadio"'
                }
            }
        }
        stage("build director"){
            when{ expression { return params.DIRECTOR_SA } }
            steps{
                dir("SoccerStats"){
                    sh 'echo "Hubo cambios en director"'
                }
            }
        }
        stage("build jugador"){
            when{ expression { return params.JUGADOR_SA } }
            steps{
                dir("SoccerStats"){
                    sh 'echo "Hubo cambios en jugador"'
                }
            }
        }
        stage("build noticia"){
            when{ expression { return params.NOTICIA_SA } }
            steps{
                dir("SoccerStats"){
                    sh 'echo "Hubo cambios en noticia"'
                }
            }
        }
        stage("build prediccion"){
            when{ expression { return params.PREDICCION_SA } }
            steps{
                dir("SoccerStats"){
                    sh 'echo "Hubo cambios en prediccion"'
                }
            }
        }
        stage("build autenticacion"){
            when{ expression { return params.AUTENTICACION_SA } }
            steps{
                dir("SoccerStats"){
                    sh 'echo "Hubo cambios en autenticacion"'
                }
            }
        }
        stage("build administrador"){
            when{ expression { return params.ADMINISTRADOR_SA } }
            steps{
                dir("SoccerStats"){
                    sh 'echo "Hubo cambios en administrador"'
                }
            }
        }
        stage("build empleado"){
            when{ expression { return params.EMPLEADO_SA } }
            steps{
                dir("SoccerStats"){
                    sh 'echo "Hubo cambios en empleado"'
                }
            }
        }
        stage("build pais"){
            when{ expression { return params.PAIS_SA } }
            steps{
                dir("SoccerStats"){
                    sh 'echo "Hubo cambios en pais"'
                }
            }
        }

    }
}
