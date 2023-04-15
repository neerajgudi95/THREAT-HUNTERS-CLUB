import * as React from "react";
import {
  CircularGaugeComponent,
  AxesDirective,
  AxisDirective,
  Inject,
  PointersDirective,
  PointerDirective,
  Annotations,
  AnnotationDirective,
  AnnotationsDirective,
} from "@syncfusion/ej2-react-circulargauge";

const CpuDetails = ({ cpuDetails }) => {
  let cpuData = 0;
  if (cpuDetails.cpuUsed !== 0) {
    cpuData = +cpuDetails?.cpuUsed.split("%")[0];
  }

  return (
    <CircularGaugeComponent
      background="transparent"
      id="container1"
      width="100%"
      height="300px"
    >
      <Inject services={[Annotations]} />
      <AxesDirective>
        <AxisDirective
          startAngle={270}
          endAngle={90}
          radius="100%"
          minimum={0}
          maximum={100}
          lineStyle={{ width: 30, color: "#f6f7f9" }}
          majorTicks={{ height: 0, interval: 10 }}
          minorTicks={{ height: 0 }}
          labelStyle={{
            font: { fontFamily: "inherit", size: "12px" },
            position: "Outside",
            offset: 10,
          }}
          className="dark:text-gray-200"
        >
          <PointersDirective>
            <PointerDirective
              type="RangeBar"
              color="#7edfb4"
              value={cpuData}
              radius="120%"
              pointerWidth={28}
              className="dark:text-gray-200"
            />
            <PointerDirective
              type="Marker"
              markerShape="Rectangle"
              markerWidth={28}
              markerHeight={3}
              radius="103%"
              color="black"
              value={cpuData}
            />
          </PointersDirective>
          {/* <RangesDirective>
                        <RangeDirective start={0} end={38} startWidth={10} endWidth={10} color="#7edfb4" radius="86%" />
                        <RangeDirective start={38} end={50} startWidth={10} endWidth={10} color="#7edfb4" radius="87%" />
                        <RangeDirective start={50} end={75} startWidth={10} endWidth={10} color="#f99d4c" radius="87%" />
                        <RangeDirective start={75} end={100} startWidth={10} endWidth={10} color="#e96920" radius="87%" />
                    </RangesDirective> */}
          <AnnotationsDirective>
            <AnnotationDirective
              content={`<div class="gaugeOneText" style="font-size:30px;font-family:inherit;">${cpuData} %</div>`}
              angle={5}
              zIndex="1"
              radius="-20%"
            />
          </AnnotationsDirective>
        </AxisDirective>
      </AxesDirective>
    </CircularGaugeComponent>
  );
};
export default CpuDetails;
