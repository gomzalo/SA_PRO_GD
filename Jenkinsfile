def bandera = false
def bandera2 = true
pipeline{
    agent any
    
    stages {
        stage('Setup') {
            steps {
                when{ expression {
                            def changeLogSets = currentBuild.changeSets
                            for (int i = 0; i < changeLogSets.size(); i++) {
                                def entries = changeLogSets[i].items
                                for (int j = 0; j < entries.length; j++) {
                                    def entry = entries[j]
                                    def files = new ArrayList(entry.affectedFiles)
                                    for (int k = 0; k < files.size(); k++) {
                                        def file = files[k]
                                        if(file.path.contains("tecnico")){
                                            bandera = true
                                        }
                                        else if(file.path.contains("pais")){
                                            bandera2 = true
                                        }
                                    }
                                }
                            }
                        } 
                    }
                sh 'echo "Hello World"'
            }
        }
        stage('Build') {
            stages{
                stage("build client"){
                    when{ expression { return bandera } }
                    steps{
                        dir("SoccerStats"){
                            sh 'echo "Hubo cambios en cliente"'
                        }
                    }
                }
                stage("build equipo"){
                    when{ expression { return bandera2 } }
                    steps{
                        dir("SoccerStats"){
                            sh 'echo "Hubo cambios en equipo"'
                        }
                    }
                }
                stage("build pais"){
                    when{ expression {return bandera}}
                    steps{
                        dir("SoccerStats"){
                            sh 'echo "Hubo cambios en pais"'
                        }
                    }
                }
            }
        }
    }
}
