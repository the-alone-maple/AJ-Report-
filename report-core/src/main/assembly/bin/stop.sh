#!/bin/bash
pid=`ps ax | grep -i 'report-core' | grep java | grep -v grep | awk '{print $1}'`
if [ -z "$pid" ] ; then
        echo "No AJ-Report Server running."
        exit -1;
fi

kill -9 ${pid}

echo "Send shutdown request to report-core(${pid}) OK"
